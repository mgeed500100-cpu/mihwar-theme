import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.initFeaturedTabs();
        this.initMihwarExperience();
    }

    initMihwarExperience() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const inspectionSections = document.querySelectorAll('[data-mihwar-inspection]');

        inspectionSections.forEach(section => {
            section.addEventListener('focusin', () => section.classList.add('is-inspected'), { once: true });
        });

        if (reduceMotion || !('IntersectionObserver' in window)) {
            inspectionSections.forEach(section => section.classList.add('is-inspected'));
        } else {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-inspected');
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.22 });
            inspectionSections.forEach(section => observer.observe(section));
        }

        document.querySelectorAll('[data-mihwar-vehicle]').forEach(finder => {
            const select = finder.querySelector('select');
            const button = finder.querySelector('[data-vehicle-go]');
            if (!select || !button) return;

            const syncButton = () => {
                const option = select.options[select.selectedIndex];
                button.disabled = !option?.value;
                button.dataset.url = option?.dataset.url || '';
            };

            select.addEventListener('change', syncButton);
            button.addEventListener('click', () => {
                if (button.dataset.url) window.location.assign(button.dataset.url);
            });
            syncButton();
        });
    }

    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                const id = btn.dataset.componentId;
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            });
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }
}

Home.initiateWhenReady(['index']);
