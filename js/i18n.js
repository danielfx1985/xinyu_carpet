(function () {
  'use strict';

  var LANG_KEY = 'xinyu_lang';

  var T = {
    zh: {
      'meta.title': '新宇地毯 | 品质卓越 · 匠心编织',
      'meta.desc': '新宇地毯 - 专业地毯制造商，提供高品质商用、家用及定制地毯解决方案，服务全球客户超过20年',

      'nav.about': '关于我们',
      'nav.products': '产品中心',
      'nav.advantages': '核心优势',
      'nav.process': '生产工艺',
      'nav.cases': '工程案例',
      'nav.news': '新闻动态',
      'nav.contact': '联系我们',

      'h1.tag': '品质卓越 · 匠心编织',
      'h1.title': '专注地毯制造<br><em>二十余年</em>',
      'h1.desc': '从原料甄选到精工制造，每一块地毯都承载着我们对品质的极致追求',
      'h1.btn1': '探索产品',
      'h1.btn2': '立即咨询',

      'h2.tag': '定制服务',
      'h2.title': '为您量身<br><em>打造专属</em>',
      'h2.desc': '商用、酒店、家居全系列解决方案，支持图案、尺寸、材质全面定制',
      'h2.btn1': '查看案例',
      'h2.btn2': '获取报价',

      'h3.tag': '全球出口',
      'h3.title': '产品远销<br><em>60余国家</em>',
      'h3.desc': '通过ISO 9001国际质量体系认证，产品远销欧美、中东、东南亚等地区',
      'h3.btn1': '了解更多',
      'h3.btn2': '合作洽谈',

      'stat.year.unit': '年',
      'stat.year.label': '行业深耕',
      'stat.country.unit': '+',
      'stat.country.label': '出口国家',
      'stat.client.unit': '+',
      'stat.client.label': '合作客户',
      'stat.capacity.unit': '万㎡',
      'stat.capacity.label': '年产能',

      'about.label': '关于新宇',
      'about.title': '传承东方织艺<br>筑就品质典范',
      'about.lead': '新宇地毯成立于2001年，是一家集研发、生产、销售于一体的专业地毯制造企业，总部坐落于中国地毯之乡——河北省威县。',
      'about.p1': '二十余年来，我们始终坚守"品质第一"的核心理念，引进国际先进设备，融合传统编织工艺与现代设计美学，打造出涵盖商用地毯、酒店地毯、家用地毯、户外地毯等全品类产品线。',
      'about.p2': '公司占地面积超过50,000平方米，拥有员工800余名，年产能达1,200万平方米，产品远销欧美、中东、东南亚等60余个国家和地区。',
      'about.cert1': 'ISO 9001 质量认证',
      'about.cert2': '国家高新技术企业',
      'about.cert3': 'OEKO-TEX 环保认证',
      'about.cert4': '中国驰名商标',
      'about.btn': '了解更多',
      'about.badge': '创立至今',

      'prod.label': '产品中心',
      'prod.title': '全系列地毯解决方案',
      'prod.desc': '覆盖家居、商用、酒店、定制等多元场景，满足您的一切地毯需求',
      'tab.all': '全部产品',
      'tab.hotel': '酒店地毯',
      'tab.commercial': '商用地毯',
      'tab.home': '家用地毯',
      'tab.outdoor': '户外地毯',
      'tab.custom': '定制地毯',
      'prod.quote': '获取报价',
      'prod.catalog': '查看完整产品目录',

      'pc1.tag': '酒店地毯',
      'pc1.name': '皇家轩尼系列',
      'pc1.desc': '手工簇绒工艺，纯羊毛材质，专为五星级酒店大厅及客房设计',
      'pc1.mat': '材质: 纯羊毛',
      'pc1.craft': '工艺: 手工簇绒',

      'pc2.tag': '商用地毯',
      'pc2.name': '铂金办公系列',
      'pc2.desc': '高密度尼龙纤维，耐磨防污，适用于写字楼、会议室等商业场所',
      'pc2.mat': '材质: 尼龙',
      'pc2.craft': '工艺: 机织',

      'pc3.tag': '家用地毯',
      'pc3.name': '自然风情系列',
      'pc3.desc': '天然棉麻混纺，柔软亲肤，简约北欧风格，家居搭配首选',
      'pc3.mat': '材质: 棉麻混纺',
      'pc3.craft': '工艺: 编织',

      'pc4.tag': '酒店地毯',
      'pc4.name': '东方锦绣系列',
      'pc4.desc': '传统提花工艺，融入东方纹样，彰显高端酒店文化底蕴',
      'pc4.mat': '材质: 羊毛+尼龙',
      'pc4.craft': '工艺: 提花织造',

      'pc5.tag': '户外地毯',
      'pc5.name': '全天候户外系列',
      'pc5.desc': 'PP聚丙烯材质，防水防紫外线，适用于阳台、庭院、泳池边',
      'pc5.mat': '材质: PP聚丙烯',
      'pc5.craft': '工艺: 机织',

      'pc6.tag': '定制地毯',
      'pc6.name': '企业专属定制',
      'pc6.desc': 'LOGO定制、图案定制、尺寸定制，为品牌空间打造专属视觉标识',
      'pc6.mat': '材质: 可选',
      'pc6.craft': '工艺: 全定制',

      'adv.label': '核心优势',
      'adv.title': '为什么选择新宇',
      'adv.desc': '二十余年专注，铸就行业领先的核心竞争力',
      'adv1.title': '严苛质量管控',
      'adv1.desc': '从原材料入库到成品出厂，全程18道质检工序，ISO 9001体系保障每批次品质稳定一致',
      'adv2.title': '全面定制服务',
      'adv2.desc': '支持图案、颜色、尺寸、材质、工艺全维度定制，专业设计团队提供从概念到成品的一站式服务',
      'adv3.title': '专业研发团队',
      'adv3.desc': '150人设计研发团队，每年推出500+新款式，紧跟国际流行趋势，持有专利技术60余项',
      'adv4.title': '大规模产能',
      'adv4.desc': '50,000㎡现代化生产基地，100+台国际先进设备，年产能1,200万平方米，支持大批量快速交付',
      'adv5.title': '全球供应网络',
      'adv5.desc': '在欧美、中东建立区域销售中心，与全球200+经销商建立长期合作，本地化服务覆盖60余国',
      'adv6.title': '环保可持续',
      'adv6.desc': 'OEKO-TEX环保认证，采用低碳生产工艺，部分产品使用回收再生材料，履行绿色制造承诺',

      'proc.label': '生产工艺',
      'proc.title': '精工流程 · 品质保障',
      'proc.desc': '每一块地毯都经历严格的生产流程，确保最终交付到您手中的是最高品质的产品',
      'proc1.title': '原料精选',
      'proc1.desc': '严格甄选新西兰羊毛、优质尼龙等原材料，源头把控品质',
      'proc2.title': '纺纱染色',
      'proc2.desc': '先进纺纱设备与环保染色工艺，色牢度高，色彩鲜艳持久',
      'proc3.title': '精密织造',
      'proc3.desc': '引进比利时Vandewiele等国际顶尖设备，确保织造精密均匀',
      'proc4.title': '后整理',
      'proc4.desc': '背胶、修边、整烫等工序，提升产品稳定性、平整度和使用寿命',
      'proc5.title': '质量检验',
      'proc5.desc': '18道质检工序，包括物理性能、色牢度、环保指标等全面检测',
      'proc6.title': '包装发货',
      'proc6.desc': '专业防潮防压包装，对接全球主流物流体系，安全准时送达',

      'cases.label': '工程案例',
      'cases.title': '服务全球知名品牌',
      'cases.desc': '深受国内外高端酒店、商业地产、知名企业信赖',
      'case1.tag': '五星级酒店',
      'case1.name': '北京某国际大酒店',
      'case1.desc': '为1,200间客房及大堂提供定制羊毛地毯，总面积超过15,000㎡',
      'case2.tag': '商业综合体',
      'case2.name': '上海某购物中心',
      'case2.desc': '高端商场公共区域整体铺装方案，耐磨商用地毯8,000㎡',
      'case3.tag': '企业总部',
      'case3.name': '深圳某科技集团',
      'case3.desc': '企业总部大楼LOGO定制地毯及全楼层办公地毯整体解决方案',
      'case4.tag': '海外项目',
      'case4.name': '迪拜豪华度假村',
      'case4.desc': '中东地区五星级度假村，东方风格定制地毯，面积20,000㎡',
      'cases.detail': '了解详情 →',
      'partners.label': '合作伙伴',

      'news.label': '新闻动态',
      'news.title': '最新资讯',
      'news1.tag': '企业新闻',
      'news1.title': '新宇地毯荣获2026年中国地毯行业十大知名品牌称号',
      'news1.desc': '近日，中国纺织工业联合会公布了2026年度中国地毯行业评选结果，新宇地毯凭借卓越的产品品质和市场表现，荣获"十大知名品牌"殊荣……',
      'news2.tag': '展会动态',
      'news2.title': '新宇地毯亮相2026广州国际地面材料展',
      'news2.desc': '新宇地毯携最新2026春夏系列重磅亮相广州展，现场展示超200款新品……',
      'news3.tag': '产品发布',
      'news3.title': '2026新宇地毯秋冬系列正式发布，融合传统与现代美学',
      'news3.desc': '新宇地毯2026秋冬新品正式发布，灵感源自中国传统纹样与现代极简设计的碰撞……',
      'news4.tag': '行业资讯',
      'news4.title': '绿色制造升级，新宇引进全套节能环保生产线',
      'news4.desc': '新宇地毯投入5,000万元引进全套低碳节能生产线，进一步降低生产过程中的碳排放……',
      'news.readmore': '阅读全文 →',

      'contact.label': '联系我们',
      'contact.title': '期待与您携手合作',
      'contact.desc': '无论是产品咨询、定制需求还是合作洽谈，我们都将在24小时内回复您',
      'contact.addr.title': '公司地址',
      'contact.addr.content': '河北省邢台市威县工业园区<br>新宇地毯产业园',
      'contact.phone.title': '销售热线',
      'contact.phone.content': '400-800-XXXX<br>+86 150 XXXX XXXX',
      'contact.email.title': '电子邮箱',
      'contact.email.content': 'sales@xinyucarpet.com<br>export@xinyucarpet.com',
      'contact.hours.title': '工作时间',
      'contact.hours.content': '周一至周五 08:30 - 18:00<br>周六 09:00 - 17:00',

      'form.name': '姓名',
      'form.company': '公司名称',
      'form.phone': '联系电话',
      'form.email': '电子邮箱',
      'form.type': '咨询类型',
      'form.message': '留言内容',
      'form.name.ph': '您的姓名',
      'form.company.ph': '您的公司',
      'form.phone.ph': '您的电话',
      'form.email.ph': '您的邮箱',
      'form.message.ph': '请详细描述您的需求，我们将尽快回复...',
      'form.type.default': '请选择咨询类型',
      'form.type.product': '产品咨询',
      'form.type.custom': '定制服务',
      'form.type.quote': '报价询价',
      'form.type.partner': '代理合作',
      'form.type.other': '其他',
      'form.submit': '提交咨询',
      'form.note': '* 我们承诺在24小时内回复您的咨询',
      'form.success.title': '提交成功！',
      'form.success.desc': '感谢您的咨询，我们的销售团队将在24小时内联系您。',

      'footer.prod.title': '产品中心',
      'footer.about.title': '关于我们',
      'footer.contact.title': '联系信息',
      'footer.desc': '专注地毯制造二十余年，以品质成就信赖，以创新引领行业，致力于成为全球最受尊敬的地毯品牌。',
      'footer.addr': '河北省邢台市威县工业园区',
      'footer.copyright': '© 2026 新宇地毯股份有限公司 版权所有 | 冀ICP备XXXXXXXX号',
      'footer.disclaimer': '本网站内容仅供展示，如需合作请联系我们'
    },

    en: {
      'meta.title': 'Xinyu Carpet | Quality Excellence · Master Craftsmanship',
      'meta.desc': 'Xinyu Carpet — Professional carpet manufacturer offering high-quality commercial, residential, and custom carpet solutions, serving global clients for over 20 years',

      'nav.about': 'About Us',
      'nav.products': 'Products',
      'nav.advantages': 'Advantages',
      'nav.process': 'Process',
      'nav.cases': 'Cases',
      'nav.news': 'News',
      'nav.contact': 'Contact',

      'h1.tag': 'Quality · Craftsmanship',
      'h1.title': 'Over 20 Years of<br><em>Carpet Excellence</em>',
      'h1.desc': 'From raw material selection to precision manufacturing, every carpet embodies our relentless pursuit of quality',
      'h1.btn1': 'Explore Products',
      'h1.btn2': 'Get a Quote',

      'h2.tag': 'Custom Services',
      'h2.title': 'Tailored<br><em>Just for You</em>',
      'h2.desc': 'Full-range solutions for commercial, hospitality, and home — custom patterns, dimensions, and materials available',
      'h2.btn1': 'View Cases',
      'h2.btn2': 'Request a Quote',

      'h3.tag': 'Global Export',
      'h3.title': 'Exported to<br><em>60+ Countries</em>',
      'h3.desc': 'ISO 9001 certified, our products reach Europe, America, the Middle East, Southeast Asia, and beyond',
      'h3.btn1': 'Learn More',
      'h3.btn2': 'Partner with Us',

      'stat.year.unit': 'Yrs',
      'stat.year.label': 'Industry Experience',
      'stat.country.unit': '+',
      'stat.country.label': 'Export Countries',
      'stat.client.unit': '+',
      'stat.client.label': 'Clients Served',
      'stat.capacity.unit': 'M㎡',
      'stat.capacity.label': 'Annual Capacity',

      'about.label': 'About Xinyu',
      'about.title': 'Inheriting Eastern Weaving Arts<br>Setting the Quality Standard',
      'about.lead': 'Founded in 2001, Xinyu Carpet is a professional carpet manufacturer integrating R&D, production, and sales, headquartered in Weixian, Hebei Province — China\'s carpet manufacturing heartland.',
      'about.p1': 'For over two decades we have upheld our "Quality First" philosophy — adopting internationally advanced equipment, blending traditional weaving craftsmanship with modern design aesthetics to build a full product line covering commercial, hotel, residential, and outdoor carpets.',
      'about.p2': 'With a factory exceeding 50,000 m², a workforce of 800+, and annual production capacity of 12 million m², our products are exported to 60+ countries across Europe, America, the Middle East, and Southeast Asia.',
      'about.cert1': 'ISO 9001 Quality Certified',
      'about.cert2': 'National High-Tech Enterprise',
      'about.cert3': 'OEKO-TEX Eco-Certified',
      'about.cert4': 'China Famous Trademark',
      'about.btn': 'Learn More',
      'about.badge': 'Est. 2001',

      'prod.label': 'Products',
      'prod.title': 'Complete Carpet Solutions',
      'prod.desc': 'Covering residential, commercial, hospitality, and custom scenarios — all your carpet needs in one place',
      'tab.all': 'All Products',
      'tab.hotel': 'Hotel Carpets',
      'tab.commercial': 'Commercial',
      'tab.home': 'Residential',
      'tab.outdoor': 'Outdoor',
      'tab.custom': 'Custom',
      'prod.quote': 'Get a Quote',
      'prod.catalog': 'View Full Product Catalog',

      'pc1.tag': 'Hotel Carpet',
      'pc1.name': 'Royal Luxury Series',
      'pc1.desc': 'Hand-tufted pure wool, designed for 5-star hotel lobbies and guestrooms with premium elegance',
      'pc1.mat': 'Material: Pure Wool',
      'pc1.craft': 'Method: Hand Tufted',

      'pc2.tag': 'Commercial Carpet',
      'pc2.name': 'Platinum Office Series',
      'pc2.desc': 'High-density nylon fiber, wear-resistant and stain-proof — ideal for offices and conference rooms',
      'pc2.mat': 'Material: Nylon',
      'pc2.craft': 'Method: Machine Woven',

      'pc3.tag': 'Residential Carpet',
      'pc3.name': 'Natural Living Series',
      'pc3.desc': 'Cotton-linen blend, soft and skin-friendly. Minimalist Scandinavian style, perfect for home interiors',
      'pc3.mat': 'Material: Cotton-Linen Blend',
      'pc3.craft': 'Method: Woven',

      'pc4.tag': 'Hotel Carpet',
      'pc4.name': 'Eastern Splendor Series',
      'pc4.desc': 'Traditional jacquard weaving with oriental motifs, showcasing the cultural depth of luxury hotels',
      'pc4.mat': 'Material: Wool + Nylon',
      'pc4.craft': 'Method: Jacquard Woven',

      'pc5.tag': 'Outdoor Carpet',
      'pc5.name': 'All-Weather Outdoor Series',
      'pc5.desc': 'PP polypropylene — waterproof and UV-resistant. Perfect for balconies, patios, and poolsides',
      'pc5.mat': 'Material: PP Polypropylene',
      'pc5.craft': 'Method: Machine Woven',

      'pc6.tag': 'Custom Carpet',
      'pc6.name': 'Corporate Custom Series',
      'pc6.desc': 'Logo, pattern, and size customization — create a distinctive branded visual identity for your space',
      'pc6.mat': 'Material: Your Choice',
      'pc6.craft': 'Method: Fully Custom',

      'adv.label': 'Core Advantages',
      'adv.title': 'Why Choose Xinyu',
      'adv.desc': '20+ years of dedicated expertise, building industry-leading competitive strengths',
      'adv1.title': 'Rigorous Quality Control',
      'adv1.desc': '18-stage inspection from raw materials to finished goods — ISO 9001 systems ensure consistent quality across every batch',
      'adv2.title': 'End-to-End Customization',
      'adv2.desc': 'Full customization of pattern, color, size, material, and technique. Our design team delivers one-stop service from concept to delivery',
      'adv3.title': 'Expert R&D Team',
      'adv3.desc': '150-person design and R&D team launching 500+ new styles annually, staying ahead of global trends with 60+ patents',
      'adv4.title': 'Large-Scale Capacity',
      'adv4.desc': '50,000 m² modern factory, 100+ international machines, 12M m² annual capacity — large orders delivered fast',
      'adv5.title': 'Global Supply Network',
      'adv5.desc': 'Regional sales centers in Europe, America, and the Middle East. 200+ distributor partners covering 60+ countries',
      'adv6.title': 'Eco-Friendly & Sustainable',
      'adv6.desc': 'OEKO-TEX certified, low-carbon production processes, recycled materials in select products — committed to green manufacturing',

      'proc.label': 'Production Process',
      'proc.title': 'Precision Process · Quality Assurance',
      'proc.desc': 'Every carpet undergoes a rigorous production process, ensuring you receive the highest quality product',
      'proc1.title': 'Raw Material Selection',
      'proc1.desc': 'Strict sourcing of New Zealand wool, premium nylon, and more — quality control starts at the source',
      'proc2.title': 'Spinning & Dyeing',
      'proc2.desc': 'Advanced spinning equipment and eco-friendly dyeing for vibrant, long-lasting color fastness',
      'proc3.title': 'Precision Weaving',
      'proc3.desc': 'Belgian Vandewiele and other world-class machines ensure precise, uniform weaving throughout',
      'proc4.title': 'Finishing',
      'proc4.desc': 'Backing, trimming, and pressing improve product stability, flatness, and service life',
      'proc5.title': 'Quality Inspection',
      'proc5.desc': '18-stage checks covering physical performance, color fastness, environmental standards, and more',
      'proc6.title': 'Packaging & Shipping',
      'proc6.desc': 'Professional moisture-proof and crush-resistant packaging, integrated with major global logistics networks',

      'cases.label': 'Project Cases',
      'cases.title': 'Trusted by Global Brands',
      'cases.desc': 'Chosen by top-tier hotels, commercial developers, and leading enterprises worldwide',
      'case1.tag': 'Five-Star Hotel',
      'case1.name': 'International Grand Hotel, Beijing',
      'case1.desc': 'Custom wool carpets for 1,200 guestrooms and lobby — total area over 15,000 m²',
      'case2.tag': 'Commercial Complex',
      'case2.name': 'Shopping Center, Shanghai',
      'case2.desc': 'Full flooring solution for a premium mall\'s public areas — 8,000 m² of commercial carpet',
      'case3.tag': 'Corporate HQ',
      'case3.name': 'Tech Group Headquarters, Shenzhen',
      'case3.desc': 'Custom logo carpets and full-floor office carpet solution for a corporate HQ building',
      'case4.tag': 'Overseas Project',
      'case4.name': 'Luxury Resort, Dubai',
      'case4.desc': 'Five-star Middle East resort — Oriental-style custom carpets spanning 20,000 m²',
      'cases.detail': 'Learn More →',
      'partners.label': 'Our Partners',

      'news.label': 'News',
      'news.title': 'Latest Updates',
      'news1.tag': 'Company News',
      'news1.title': 'Xinyu Carpet Named Among China\'s Top 10 Carpet Brands 2026',
      'news1.desc': 'The China National Textile and Apparel Council has announced its 2026 awards. Xinyu Carpet earned the prestigious "Top 10 Famous Brands" title for outstanding product quality and market performance...',
      'news2.tag': 'Trade Shows',
      'news2.title': 'Xinyu Carpet Shines at the 2026 Guangzhou International Floor Materials Expo',
      'news2.desc': 'Xinyu Carpet made a bold appearance at the Guangzhou Expo with its latest 2026 Spring/Summer collection, showcasing 200+ new designs on site...',
      'news3.tag': 'Product Launch',
      'news3.title': '2026 Xinyu Carpet Autumn/Winter Collection Released — Tradition Meets Modern Aesthetics',
      'news3.desc': 'The Xinyu 2026 Autumn/Winter collection is officially unveiled, drawing inspiration from Chinese traditional motifs colliding with modern minimalist design...',
      'news4.tag': 'Industry News',
      'news4.title': 'Green Upgrade: Xinyu Installs Full Eco-Friendly Production Line',
      'news4.desc': 'Xinyu Carpet invested ¥50 million to install a complete low-carbon production line, further reducing carbon emissions throughout the manufacturing process...',
      'news.readmore': 'Read More →',

      'contact.label': 'Contact Us',
      'contact.title': 'We Look Forward to Working with You',
      'contact.desc': 'Whether it\'s a product inquiry, custom request, or partnership discussion, we\'ll respond within 24 hours',
      'contact.addr.title': 'Address',
      'contact.addr.content': 'Weixian Industrial Park, Xingtai, Hebei Province<br>Xinyu Carpet Industrial Zone',
      'contact.phone.title': 'Sales Hotline',
      'contact.phone.content': '400-800-XXXX<br>+86 150 XXXX XXXX',
      'contact.email.title': 'Email',
      'contact.email.content': 'sales@xinyucarpet.com<br>export@xinyucarpet.com',
      'contact.hours.title': 'Business Hours',
      'contact.hours.content': 'Mon–Fri: 08:30 – 18:00<br>Saturday: 09:00 – 17:00',

      'form.name': 'Name',
      'form.company': 'Company',
      'form.phone': 'Phone',
      'form.email': 'Email',
      'form.type': 'Inquiry Type',
      'form.message': 'Message',
      'form.name.ph': 'Your name',
      'form.company.ph': 'Your company',
      'form.phone.ph': 'Your phone number',
      'form.email.ph': 'Your email address',
      'form.message.ph': 'Please describe your needs in detail and we\'ll get back to you soon...',
      'form.type.default': 'Select inquiry type',
      'form.type.product': 'Product Inquiry',
      'form.type.custom': 'Custom Service',
      'form.type.quote': 'Request a Quote',
      'form.type.partner': 'Distributor Partnership',
      'form.type.other': 'Other',
      'form.submit': 'Submit Inquiry',
      'form.note': '* We commit to responding to your inquiry within 24 hours',
      'form.success.title': 'Submitted Successfully!',
      'form.success.desc': 'Thank you for your inquiry. Our sales team will contact you within 24 hours.',

      'footer.prod.title': 'Products',
      'footer.about.title': 'About Us',
      'footer.contact.title': 'Contact',
      'footer.desc': 'Over 20 years of dedicated carpet manufacturing — delivering quality, driving innovation, and aspiring to become the world\'s most respected carpet brand.',
      'footer.addr': 'Weixian Industrial Park, Xingtai, Hebei, China',
      'footer.copyright': '© 2026 Xinyu Carpet Co., Ltd. All Rights Reserved',
      'footer.disclaimer': 'This website is for display purposes only. Contact us for business inquiries.'
    }
  };

  function applyLang(lang) {
    if (!T[lang]) return;

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = T[lang]['meta.title'];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', T[lang]['meta.desc']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
    });

    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(LANG_KEY, lang);
    window.currentLang = lang;
  }

  function initI18n() {
    var saved = localStorage.getItem(LANG_KEY) || 'zh';
    applyLang(saved);
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  window.T = T;
  window.applyLang = applyLang;
  window.initI18n = initI18n;
  window.currentLang = 'zh';
})();
