import fs from 'node:fs';

const file = new URL('../twilight.json', import.meta.url);
const config = JSON.parse(fs.readFileSync(file, 'utf8'));

config.name = { ar: 'محور', en: 'Mihwar' };
config.repository = 'https://github.com/mgeed500100-cpu/mihwar-theme';
config.author_email = '295204176+mgeed500100-cpu@users.noreply.github.com';
config.support_url = 'https://github.com/mgeed500100-cpu/mihwar-theme/issues';
config.description = {
  ar: 'ثيم سيارات وقطع غيار سريع ومرن، مصمم للبحث الدقيق والوصول للقطعة المناسبة.',
  en: 'A fast, flexible automotive theme designed for precise search and confident part discovery.'
};

const text = (id, label, value, options = {}) => ({
  id, type: 'string', format: options.format || 'text', label,
  value, required: options.required ?? false, multilanguage: options.multilanguage ?? true,
  maxLength: options.maxLength || 160
});
const items = (id, label, source, maxLength = 12) => ({
  id, type: 'items', format: 'dropdown-list', label, source,
  selected: [], options: [], value: [], multichoice: true, searchable: true,
  required: false, minLength: 0, maxLength
});

const mihwarComponents = [
  {
    key: 'a70b2f4f-2585-4f56-a13a-37def98c1501',
    title: { ar: 'محور: الواجهة السينمائية', en: 'Mihwar: Cinematic hero' },
    icon: 'sicon-dashboard', path: 'home.mihwar-hero', is_default: true,
    fields: [
      text('badge', 'النص العلوي', 'أداء يليق بطريقك'),
      text('title', 'العنوان الرئيسي', 'القطعة الصح. من أول مرة.', { maxLength: 80 }),
      text('description', 'الوصف', 'ابحث برقم القطعة أو اكتشف القطع المناسبة لسيارتك بثقة وسرعة.', { format: 'textarea', maxLength: 240 }),
      text('cta', 'نص زر البحث', 'ابحث عن قطعتك', { maxLength: 40 }),
      text('image', 'صورة السيارة أو الخلفية', null, { format: 'image', multilanguage: false })
    ]
  },
  {
    key: '7541ab24-b28a-485d-b077-f555902f1359',
    title: { ar: 'محور: اختر سيارتك', en: 'Mihwar: Vehicle finder' },
    icon: 'sicon-car', path: 'home.vehicle-selector', is_default: true,
    fields: [
      text('title', 'العنوان', 'اختر سيارتك، ونقرّب لك القطعة'),
      text('description', 'الوصف', 'أنشئ روابط جاهزة لكل سيارة تقود العميل إلى التصنيف أو نتيجة البحث المناسبة.', { format: 'textarea' }),
      {
        id: 'vehicles', type: 'collection', format: 'collection', label: 'السيارات', item_label: 'سيارة',
        required: false, minLength: 0, maxLength: 30, value: [],
        fields: [
          text('vehicles.make', 'الشركة', null, { required: true, multilanguage: false, maxLength: 40 }),
          text('vehicles.model', 'الموديل', null, { required: true, multilanguage: false, maxLength: 40 }),
          text('vehicles.year', 'السنة أو الجيل', null, { required: true, multilanguage: false, maxLength: 30 }),
          text('vehicles.url', 'رابط النتائج', null, { required: true, multilanguage: false, maxLength: 500 })
        ]
      }
    ]
  },
  {
    key: 'c05a65cc-11b4-49ed-ae9b-57bc3dfb09da',
    title: { ar: 'محور: شبكة التصنيفات', en: 'Mihwar: Category bento' },
    icon: 'sicon-grid', path: 'home.category-bento', is_default: true,
    fields: [
      text('title', 'العنوان', 'كل ما تحتاجه سيارتك'),
      text('description', 'الوصف', 'وصول بصري سريع للزيوت والفرامل والإضاءة والعناية والإكسسوارات.', { format: 'textarea' }),
      items('categories', 'التصنيفات', 'categories', 8)
    ]
  },
  {
    key: '90b9d18e-cdba-4d28-aac2-2bbd6f0617e4',
    title: { ar: 'محور: قطع مختارة', en: 'Mihwar: Parts showcase' },
    icon: 'sicon-box', path: 'home.parts-showcase', is_default: true,
    fields: [
      text('title', 'العنوان', 'قطع مختارة بعناية'),
      items('products', 'المنتجات', 'products', 16)
    ]
  },
  {
    key: '3cbf2285-05bc-4a53-a8ce-ae0d74445a27',
    title: { ar: 'محور: العلامات الموثوقة', en: 'Mihwar: Trusted brands' },
    icon: 'sicon-award-ribbon', path: 'home.mihwar-brands', is_default: true,
    fields: [
      text('title', 'العنوان', 'ماركات يعرفها أهل الطريق'),
      items('brands', 'العلامات التجارية', 'brands', 12)
    ]
  }
];

const paths = new Set(mihwarComponents.map(component => component.path));
const raedComponents = config.components
  .filter(component => !paths.has(component.path))
  .map(component => ({ ...component, is_default: false }));
config.components = [...raedComponents, ...mihwarComponents];
fs.writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`);

for (const [locale, values] of Object.entries({
  ar: {
    search_parts: 'ابحث عن قطعتك', shop_all: 'تسوق كل القطع', store_advantages: 'مزايا المتجر',
    available_parts: 'قطعة متاحة', fast_dispatch: 'تجهيز سريع', secure_purchase: 'شراء موثوق',
    right_part: 'القطعة المناسبة', choose_vehicle: 'بيانات سيارتك', select_vehicle: 'اختر الشركة والموديل والسنة',
    show_compatible: 'اعرض القطع المناسبة', fitment_note: 'التوافق يعتمد على الروابط والتصنيفات التي يضبطها التاجر؛ تحقق من رقم الهيكل عند الحاجة.',
    quick_access: 'وصول سريع', explore_category: 'استكشف القسم', curated_parts: 'اختياراتنا', search_by_sku: 'بحث برقم القطعة',
    compare_title: 'قارن قبل أن تقرر', compare_description: 'ضع المنتجات جنباً إلى جنب عبر ميزة المقارنة عند تفعيلها في المتجر.',
    trusted_names: 'جودة معروفة'
  },
  en: {
    search_parts: 'Find your part', shop_all: 'Shop all parts', store_advantages: 'Store advantages',
    available_parts: 'available parts', fast_dispatch: 'fast dispatch', secure_purchase: 'secure purchase',
    right_part: 'The right fit', choose_vehicle: 'Your vehicle', select_vehicle: 'Choose make, model and year',
    show_compatible: 'Show compatible parts', fitment_note: 'Compatibility follows the links and categories configured by the merchant; verify the VIN when needed.',
    quick_access: 'Quick access', explore_category: 'Explore category', curated_parts: 'Curated picks', search_by_sku: 'Search by part number',
    compare_title: 'Compare with confidence', compare_description: 'Place products side-by-side when the store comparison feature is enabled.',
    trusted_names: 'Trusted quality'
  }
})) {
  const localeFile = new URL(`../src/locales/${locale}.json`, import.meta.url);
  const data = JSON.parse(fs.readFileSync(localeFile, 'utf8'));
  data.mihwar = values;
  fs.writeFileSync(localeFile, `${JSON.stringify(data, null, 2)}\n`);
}
