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
        const revealItems = document.querySelectorAll('[data-mihwar-reveal]');
        if (reduceMotion || !('IntersectionObserver' in window)) {
            revealItems.forEach(item => item.classList.add('is-visible'));
        } else {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.14 });
            revealItems.forEach(item => observer.observe(item));
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
                if (button.dataset.url) window.location.href = button.dataset.url;
            });
            syncButton();
        });

        document.querySelectorAll('[data-mihwar-search]').forEach(button => {
            button.addEventListener('click', () => salla.event.dispatch('search::open'));
        });
    }

    /**
     * used in views/components/home/featured-products-style*.twig
     */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                // btn.setAttribute('fill', 'solid');
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);

                // fadeIn active tabe
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            })
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }
}

Home.initiateWhenReady(['index']);
