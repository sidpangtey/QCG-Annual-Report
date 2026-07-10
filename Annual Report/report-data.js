/* ============================================================
   Scanova QR Performance Benchmarks — report data
   Source: internal benchmark study, first-party Scanova scan
   data, all-time. Curated for external publication:
   customer names removed; records described anonymously.
   Update this file for next report cycle — pages re-render.
   ============================================================ */

const REPORT = {
  meta: {
    year: 2026,
    industriesCount: 4,
    accounts: 211,
    codes: 36810,
    scans: 69897248,
    scansDisplay: "69.9M",
    dataNote: "First-party Scanova platform data"
  },

  universalFindings: [
    {
      title: "A tiny, elite percentage of codes does almost all the work",
      body: "In every industry, between 0.5% and 5% of QR Codes generate 78–95% of all scans. Brands should look at elite QR Code behaviour, instead of monitoring average scans."
    },
    {
      title: "Dynamic QR Codes need to be your brand's first choice",
      body: "94.6% to 99.5% of live codes across all 4 industries are Dynamic QR Codes. In every segment we analyzed, Static QR Codes existed only as legacy and test artifacts as they record no scan activity."
    },
    {
      title: "QR Code performance compounds with time",
      body: "The oldest codes in our data have been live for 8–10+ years and are still scanning. In 3 of 4 industries, codes aged 5+ years get the highest scans, becoming a compounding engagement channel."
    },
    {
      title: "The highest-performing use cases are the least deployed",
      body: "Each QR Code use case that stands out the most is deployed by only a handful of brands — the biggest growth lever in the data is replicating what the top-performers already proved."
    },
    {
      title: "Targeted and well-executed custom QR Code design helps",
      body: "A customized QR Code out-scans the generic black-and-white QR Code by 2.4x for CPG at the median. In manufacturing the medians are identical, in hospitality nearly so, and in F&B this reverses. Customization is surely an advantage but not always. The placement and use case matter more."
    }
  ],

  industries: {
    cpg: {
      slug: "cpg",
      heroImage: "img/hero-cpg.jpg",
      heroImageAlt: "QR Code on consumer product packaging on a retail shelf",
      name: "CPG & Consumer Goods",
      shortName: "CPG",
      color: "cpg",
      dataAsOf: "May 2026",
      accounts: 28,
      codes: 8514,
      codesEver: 8561,
      scans: 46858278,
      scansDisplay: "46.9M",
      medianActive: 21,
      meanActive: 6781,
      meanAll: 5504,
      maxCode: 2756580,
      maxCodeDesc: "a product landing page for a global kitchen-appliance brand",
      activePct: 81.2,
      zeroPct: 18.8,
      dynamicPct: 99.5,
      concPctCodes: 5.06,
      concPctScans: 94.5,
      concCells: 5,
      heroLine: "The typical packaging code earns 21 scans. The elite 5% earn almost everything else.",
      summary: "28 CPG brands, 8,514 live codes, 46.9 million scans — the deepest scan pool of any industry we analyzed. CPG is a segment of extremes: broad portfolios of low-traffic codes coexisting with individual packaging codes that clear 2.7 million scans.",
      teaser: "Packaging is where QR Code performance gets most extreme — most codes on the shelf move quietly, while a select few packaging placements pull in millions of scans on their own. What separates the two has less to do with luck than with where the code sits and what it's asked to do.",
      concentrationBody: "In CPG, virtually all the engagement comes from a fraction of the shelf. Codes that cleared 10,000+ scans make up just 5.06% of the portfolio, yet they carry 94.5% of all scans — proof that the packaging itself matters less than what the code is asked to do once it's scanned.",
      portfolioIntro: "Connected packaging succeeds or fails based on where the code points — and the data shows custom-built pages massively out-earn generic redirects.",
      dynamicNote: "of live codes are Dynamic QR Codes — Static QR Codes recorded <strong>zero</strong> scan activity anywhere in the CPG dataset.",
      useCaseIntro: "In CPG, 90.8% of codes are simple brand-website redirects — yet the highest-earning use case, how-to video, is barely 1% of the portfolio. Deployment share and performance point in almost opposite directions here.",
      opportunityIntro: "Every opportunity below is already live somewhere in CPG — proven by a handful of brands, untouched by the other 26. That's less a prediction than a head start for whoever moves first.",
      curveIntro: "CPG has the widest gap in this study between a typical code and an elite one — here's what the data says actually separates them, one rung at a time.",
      ch01Title: "The Real QR Code Scan Rate for CPG Packaging",
      ch02Title: "Why a Few QR Codes Drive Almost All CPG Packaging Scans",
      ch04Title: "QR Code Destinations on CPG Packaging: What Gets Scanned",
      ch05Title: "QR Code Consumer Engagement: What's Deployed vs. What Performs",
      ch06Title: "High-Performing QR Code Use Cases Your CPG Peers Haven't Touched",
      reportHeading: "Get the shareable CPG QR Benchmark report",
      tabInsights: [
        "<strong>How-to video codes average 19,181 scans</strong> — the highest per-code rate in the industry, yet deployed by just 2 of 28 brands.",
        "<strong>Custom-designed codes out-scan black-and-white 2.4× at the median</strong> — the clearest design payoff of any industry.",
        "<strong>6+ year customers average 13,951 scans per code — 58× the scan rate of &lt;2 year customers.</strong> Packaging codes compound with time."
      ],
      tiers: [
        { tier: "0 scans", codesPct: 18.8, scansPct: 0 },
        { tier: "1–99", codesPct: 54.8, scansPct: 0.2 },
        { tier: "100–999", codesPct: 14.5, scansPct: 0.9 },
        { tier: "1K–9.9K", codesPct: 6.8, scansPct: 4.4 },
        { tier: "10K+", codesPct: 5.1, scansPct: 94.5, hl: true }
      ],
      accountBench: { avgScans: "1.67M", medScans: "41.5K", avgCodes: 306, medCodes: 62 },
      accountNote: "The mean is pulled far above the median by one enterprise account responsible for 86% of segment scans — benchmark against the median.",
      planTiers: [
        { plan: "Enterprise", accounts: 3, meanPerCode: 9901 },
        { plan: "Pro", accounts: 15, meanPerCode: 4593 },
        { plan: "Standard", accounts: 3, meanPerCode: 1819 },
        { plan: "Lite / Basic", accounts: 7, meanPerCode: 7277 }
      ],
      planNote: "Lite/Basic looks high because small portfolios are dominated by one or two high-traffic codes; Enterprise and Pro reflect performance at scale.",
      tenure: [
        { band: "< 2 years", meanPerCode: 240 },
        { band: "2–4 years", meanPerCode: 818 },
        { band: "4–6 years", meanPerCode: 6418 },
        { band: "6+ years", meanPerCode: 13951 }
      ],
      tenureInsight: "6+ year customers generate 58× the per-code scan rate of customers under two years. Codes printed on physical packaging keep accumulating — the longer the program runs, the more each code returns.",
      categories: [
        { name: "Website URL", codesPct: 86.1, scansPct: 49.8, avgActive: 4017 },
        { name: "Custom Page", codesPct: 9.7, scansPct: 48.9, avgActive: 28914 },
        { name: "Document", codesPct: 2.9, scansPct: 0.4, avgActive: 890 },
        { name: "App Store", codesPct: 0.4, scansPct: 0.7, avgActive: 8848 },
        { name: "Coupon", codesPct: 0.1, scansPct: 0.2, avgActive: 20030 }
      ],
      categoryInsight: "Custom Pages are 9.7% of codes but 48.9% of scans — purpose-built product landing pages massively out-earn generic URL redirects.",
      design: {
        story: "The clearest design finding in the study: the typical custom-designed code earns 38 scans vs 16 for plain black-and-white — a 2.4× median lift. (Raw averages favor B&W only because two outlier accounts' biggest codes happen to be B&W.)",
        designerMed: 38, bwMed: 16, designerShare: 25.0
      },
      longevity: {
        meanAge: "2.59 yrs", medianAge: "2.84 yrs", oldest: "10.4 yrs",
        story: "The average live CPG code has been in market 2.6 years. Codes aged 5+ years average 13,268 scans per active code — the elite long-haul packaging cohort — and the oldest code in the dataset has been scanning for over a decade."
      },
      useCases: [
        { name: "Brand / product website", codesPct: 90.8, scansPct: 95.8, avgActive: 7108, activePct: 82 },
        { name: "How-to / tutorial video", codesPct: 1.0, scansPct: 2.9, avgActive: 19181, activePct: 86 },
        { name: "Product info / shop", codesPct: 6.6, scansPct: 1.0, avgActive: 1125, activePct: 74 },
        { name: "Sampling & redemption", codesPct: 0.5, scansPct: 0.2, avgActive: 2456, activePct: 100 },
        { name: "Registration & warranty", codesPct: 0.2, scansPct: 0.1, avgActive: 2187, activePct: 95 },
        { name: "Product support", codesPct: 0.1, scansPct: 0.03, avgActive: 2074, activePct: 100 }
      ],
      opportunities: [
        { name: "How-to / tutorial video", avg: 19181, penetration: "2 of 28 brands", body: "The single highest per-code rate in CPG. Any product with assembly, setup, or usage intensity can carry one tutorial code per SKU." },
        { name: "Sampling & redemption", avg: 2456, penetration: "1 of 28 brands", body: "100% active rate — every deployed sampling code gets scanned. Proven at scale in CRM-linked trial campaigns; replicable for any FMCG brand." },
        { name: "Registration & warranty", avg: 2187, penetration: "2 of 28 brands", body: "95% active rate. Post-purchase registration turns a scan into owned first-party consumer data." },
        { name: "Product support", avg: 2074, penetration: "1 of 28 brands", body: "Every product with a setup flow, FAQ, or support need is a deployment slot. Used by one account today." },
        { name: "Loyalty & rewards", avg: 178, penetration: "1 of 28 brands", body: "Only two loyalty codes exist in the entire CPG dataset — packaging is a direct loyalty channel almost nobody uses." }
      ],
      faqs: [
        { q: "How are QR codes used on packaging in the CPG industry?", a: "Predominantly as links to a brand or product page — 90.8% of CPG QR Codes point to a brand/product website, accounting for 95.8% of all scans. The rest cover how-to videos, product info, sampling and redemption, registration, and support." },
        { q: "What percentage of QR codes on packaging actually get scanned?", a: "81.2% of live CPG codes have recorded at least one scan; the remaining 18.8% have never been scanned — typically test codes or codes never deployed in a live campaign." },
        { q: "What's a normal QR code scan rate on packaging?", a: "The median active CPG code earns 21 scans. The average is far higher, at 6,781, pulled up by a small number of high-traffic codes — which is why the median is the more honest benchmark." },
        { q: "What is connected packaging, and how well does it perform?", a: "Connected packaging is packaging with an embedded QR Code linking to digital content. In CPG it performs unevenly: most codes just redirect to a generic brand website, but purpose-built Custom Pages are 9.7% of codes yet drive 48.9% of scans, and how-to videos average 19,181 scans per code — the highest per-code rate in the industry." },
        { q: "How do CPG brands use QR codes for consumer engagement?", a: "Beyond the default brand-website link: sampling and redemption (100% active rate wherever deployed), product registration and warranty (95% active), and product support — all proven but each used by only one or two of the 28 brands in this data." },
        { q: "Are custom-designed QR codes more engaging than plain ones?", a: "Yes, decisively — the typical custom-designed CPG code earns 38 scans versus 16 for plain black-and-white, a 2.4× median lift, the clearest design payoff of any industry studied." },
        { q: "Where can I get a full QR code scan report for CPG?", a: "The complete CPG & Consumer Goods benchmark report is available as a free PDF further down this page." }
      ]
    },

    mi: {
      slug: "mi",
      heroImage: "img/hero-mi.jpg",
      heroImageAlt: "QR Code label on industrial equipment in a manufacturing facility",
      name: "Manufacturing & Industrial",
      shortName: "Manufacturing",
      dataAsOf: "April 2026",
      accounts: 93,
      codes: 18182,
      codesEver: 18740,
      scans: 9308399,
      scansDisplay: "9.3M",
      medianActive: 8,
      meanActive: 641,
      meanAll: 512,
      maxCode: 2430105,
      maxCodeDesc: "an automotive parts fitment-lookup code",
      activePct: 79.8,
      zeroPct: 20.2,
      dynamicPct: 98.1,
      concPctCodes: 0.48,
      concPctScans: 84.7,
      concCells: 1,
      heroLine: "Half a percent of codes carry 85% of scans — the steepest concentration curve in the study.",
      summary: "93 manufacturers, 18,182 live codes, 9.3 million scans — the largest customer base and code portfolio of any industry analyzed. Manufacturing deploys QR at operational scale: documentation, fitment, and field-sales codes in high volume, punctuated by a few campaign codes that dominate scan share.",
      teaser: "Manufacturing runs QR Codes at industrial scale — most of the portfolio is documentation and spec sheets doing quiet, necessary work, while a small set of campaign and field-sales codes carry almost the entire scan volume. It's the steepest concentration curve of any industry we studied, and it says a lot about where the real opportunity sits.",
      concentrationBody: "Manufacturing has the steepest concentration curve in this study — 0.48% of codes, barely one in two hundred, account for 84.7% of all scans. The other 99.5% of the portfolio is largely documentation and low-traffic deployments doing necessary but quiet work.",
      portfolioIntro: "Most manufacturing QR Codes exist for documentation and compliance — but the portfolio's real engagement lives in the smaller slice built for campaigns, installation help, and parts lookup.",
      dynamicNote: "of scanning codes in manufacturing are Dynamic QR Codes. Static codes exist mostly as legacy artifacts and recorded <strong>zero</strong> scan activity.",
      useCaseIntro: "Manufacturing deploys QR Codes overwhelmingly for documentation and general web links — but the use cases that actually earn scans, like promotional campaigns and installation videos, sit far down the deployment list.",
      opportunityIntro: "None of the use cases below are hypothetical — each is already running inside manufacturing today, just concentrated in a small handful of the 93 accounts in this data.",
      curveIntro: "Manufacturing's concentration curve is the steepest we studied — which makes the path from a typical code to an elite one unusually well-defined. Three rungs, grounded in this industry's own data.",
      ch01Title: "The Real QR Code Scan Rate for Manufacturing",
      ch02Title: "Why a Few QR Codes Drive Almost All Manufacturing Scans",
      ch04Title: "QR Code Destinations in Manufacturing: What Gets Scanned",
      ch05Title: "QR Code Documentation and Field Use Cases: What's Deployed vs. What Performs",
      ch06Title: "High-Performing QR Code Use Cases Your Manufacturing Peers Haven't Touched",
      reportHeading: "Get the shareable manufacturing QR benchmark report",
      tabInsights: [
        "<strong>Promotional campaign codes average 2,578 scans — 2.8× brand-website codes</strong> — yet fewer than 10 of 93 accounts run them.",
        "<strong>Fitment / parts-lookup codes post a 96% active rate</strong>, the highest of any use case in the segment.",
        "<strong>18.5% of codes are spec sheets and manuals earning 2.9% of scans</strong> — deployed for compliance, not engagement."
      ],
      tiers: [
        { tier: "0 scans", codesPct: 20.2, scansPct: 0 },
        { tier: "1–99", codesPct: 70.1, scansPct: 2.0 },
        { tier: "100–999", codesPct: 7.6, scansPct: 4.5 },
        { tier: "1K–9.9K", codesPct: 1.6, scansPct: 8.7 },
        { tier: "10K+", codesPct: 0.5, scansPct: 84.7, hl: true }
      ],
      accountBench: { avgScans: "100K", medScans: "2.4K", avgCodes: 202, medCodes: 52 },
      accountNote: "One long-tenured account drives 69% of segment scans from just 86 active codes — benchmark against the median.",
      planTiers: [
        { plan: "Enterprise", accounts: 6, meanPerCode: 116 },
        { plan: "Pro", accounts: 47, meanPerCode: 1876 },
        { plan: "Standard", accounts: 7, meanPerCode: 126 },
        { plan: "Lite / Basic", accounts: 33, meanPerCode: 1326 }
      ],
      planNote: "Enterprise portfolios here are large operational catalogues — high code volume, steady low per-code traffic. Pro accounts drive 97% of segment scans.",
      tenure: [
        { band: "< 2 years", meanPerCode: 928 },
        { band: "2–4 years", meanPerCode: 306 },
        { band: "4–6 years", meanPerCode: 894 },
        { band: "6+ years", meanPerCode: 5691 }
      ],
      tenureInsight: "6+ year customers average 5,691 scans per code — 6× the rate of newer accounts. Codes on packaging, equipment labels, and printed manuals keep earning long after deployment.",
      categories: [
        { name: "Website URL", codesPct: 75.3, scansPct: 92.1, avgActive: 747 },
        { name: "Document", codesPct: 13.4, scansPct: 0.6, avgActive: 34 },
        { name: "Social Media", codesPct: 0.2, scansPct: 3.3, avgActive: 8045 },
        { name: "App Store", codesPct: 0.7, scansPct: 2.4, avgActive: 2082 },
        { name: "VCard / Business Card", codesPct: 4.9, scansPct: 0.8, avgActive: 90 }
      ],
      categoryInsight: "Social media codes are 0.2% of the portfolio but average 8,045 scans each — brand-video campaigns punch far above their footprint.",
      design: {
        story: "Designer codes account for 63% of the portfolio and 74% of scans — but the typical designer and B&W code perform identically at the median (8 scans each). The mean advantage is account-driven, not style-driven.",
        designerMed: 8, bwMed: 8, designerShare: 63.2
      },
      longevity: {
        meanAge: "2.52 yrs", medianAge: "2.46 yrs", oldest: "8.2+ yrs",
        story: "Codes aged 5+ years hold 36% of all scans at 3,309 scans per active code. Packaging and label codes created in 2021–2023 remain the segment's biggest earners today."
      },
      useCases: [
        { name: "Brand / product website", codesPct: 35.9, scansPct: 49.2, avgActive: 914, activePct: 77 },
        { name: "Promotional campaign", codesPct: 6.5, scansPct: 29.7, avgActive: 2578, activePct: 91 },
        { name: "Product info / shop", codesPct: 19.0, scansPct: 5.6, avgActive: 176, activePct: 85 },
        { name: "How-to / installation video", codesPct: 1.8, scansPct: 3.9, avgActive: 1230, activePct: 91 },
        { name: "App download", codesPct: 2.6, scansPct: 3.8, avgActive: 843, activePct: 88 },
        { name: "Documentation / spec sheet", codesPct: 18.5, scansPct: 2.9, avgActive: 109, activePct: 74 },
        { name: "Fitment / parts lookup", codesPct: 0.4, scansPct: 0.3, avgActive: 410, activePct: 96 }
      ],
      opportunities: [
        { name: "Promotional campaign", avg: 2578, penetration: "~8 of 93 accounts", body: "Campaign codes generate 2.8× more scans per code than brand-website codes — proven by the segment's most engaged manufacturers, run by almost nobody else." },
        { name: "How-to / installation video", avg: 1230, penetration: "~12 of 93 accounts", body: "91% active rate. Any product with an installation, setup, or maintenance process is a deployment slot — one video code per SKU or family." },
        { name: "App download", avg: 843, penetration: "~8 of 93 accounts", body: "Manufacturers with parts catalogues, fitment tools, or service apps have an immediate high-value deployment channel on product and packaging." },
        { name: "Fitment / parts lookup", avg: 410, penetration: "~5 of 93 accounts", body: "96% active rate — the highest of any use case. Any brand selling parts, blades, filters, or consumables requiring compatibility lookup should deploy this." },
        { name: "Product registration", avg: 178, penetration: "~10 of 93 accounts", body: "94% active rate. Post-installation registration on packaging or manuals captures customer data and opens the service relationship." }
      ],
      faqs: [
        { q: "What's a typical QR code scan rate in manufacturing?", a: "The median active code earns 8 scans; the average is 641, pulled up sharply by outliers." },
        { q: "What percentage of manufacturing QR codes actually get scanned?", a: "79.8% are active; 20.2% have never been scanned." },
        { q: "How concentrated is QR code performance in manufacturing?", a: "Extremely — just 0.48% of codes generate 84.7% of all scans, the steepest concentration curve of any industry in this study." },
        { q: "Does customer tenure affect QR code performance in manufacturing?", a: "Generally yes — 6+ year accounts average 5,691 scans per code, about 6× the newest cohort — though the relationship isn't perfectly linear across the middle tenure bands." },
        { q: "Does custom QR code design improve scan performance in manufacturing?", a: "Barely — designer and black-and-white codes both post a median of 8 scans; the average gap is account-driven, not design-driven." },
        { q: "Which QR code use case performs best in manufacturing?", a: "Promotional campaign codes, averaging 2,578 scans per active code — 2.8× the brand-website baseline — though run by fewer than 10 of 93 accounts." },
        { q: "Are dynamic QR codes better than static ones in manufacturing?", a: "Yes — 98.1% of scanning codes are dynamic; static codes recorded next to no scan activity in this segment." },
        { q: "How long do manufacturing QR codes stay active?", a: "The average live code has been in market 2.5 years, and some of the oldest are still scanning after 8.2+ years." },
        { q: "Which account type gets the most scans per manufacturing QR code?", a: "Pro-tier accounts, averaging 1,876 scans per code — and with 47 of the 93 accounts on this plan, they drive most of the segment's scans." }
      ]
    },

    hotels: {
      slug: "hotels",
      heroImage: "img/hero-hotels.jpg",
      heroImageAlt: "QR Code menu stand on a table in a hotel restaurant",
      name: "Hotels & Resorts",
      shortName: "Hotels & Resorts",
      dataAsOf: "April 2026",
      accounts: 52,
      codes: 4136,
      codesEver: 4196,
      scans: 7374903,
      scansDisplay: "7.4M",
      medianActive: 23,
      meanActive: 2096,
      meanAll: 1780,
      maxCode: 544749,
      maxCodeDesc: "a resort property-information code",
      activePct: 84.9,
      zeroPct: 15.1,
      dynamicPct: 99.5,
      concPctCodes: 3.0,
      concPctScans: 78.0,
      concCells: 3,
      heroLine: "Hospitality has the healthiest portfolios in the study — and the menu is the engine.",
      summary: "52 hotel and resort operators, 4,136 live codes, 7.4 million scans — Hotels have the highest median scans per code and the lowest zero-scan rate (15.1%) of any industry. Their benchmarks are also the least skewed by a few top performers. QR Codes are built into daily operations, including menus, guest services, and reviews.",
      teaser: "Hospitality is the healthiest portfolio in the study — fewer dead codes, a higher typical scan rate, and none of the wild extremes that define other industries. QR Codes here aren't a side project; they're woven into daily operations, from the dining table to the front desk to the post-stay review.",
      concentrationBody: "Hospitality concentrates scans less severely than any other industry here — codes clearing 10,000+ scans are still just 3.0% of the portfolio, but they carry a comparatively contained 78.0% of all scans. Even outside that top tier, hospitality codes see healthier baseline traffic.",
      portfolioIntro: "Hospitality treats the QR Code as a daily-operations tool, not a marketing add-on — the mix below shows menus, guest documents, and property information doing most of the work.",
      dynamicNote: "of live hospitality codes are Dynamic QR Codes — practically the entire portfolio. Static codes recorded <strong>zero</strong> scans.",
      useCaseIntro: "Hospitality is one of the few industries where deployment and performance mostly agree — menus are both heavily deployed and the top earner. But smaller use cases, like app downloads, quietly outperform on a per-code basis.",
      opportunityIntro: "Every use case here is already working somewhere in hospitality — the question for most properties isn't whether it performs, it's why it hasn't been deployed yet.",
      curveIntro: "Hospitality already has the healthiest typical code in this study — these three rungs show what separates good from elite, not just adequate from average.",
      ch01Title: "The Real QR Code Scan Rate for Hotels & Resorts",
      ch02Title: "Why a Few QR Codes Drive Most Hotel & Resort Scans",
      ch04Title: "QR Code Destinations in Hotels & Resorts: What Guests Scan",
      ch05Title: "QR Code Guest Engagement: What's Deployed vs. What Performs",
      ch06Title: "High-Performing QR Code Use Cases Your Hotel Peers Haven't Touched",
      reportHeading: "Get the shareable hotel QR benchmark report",
      tabInsights: [
        "<strong>Menu & dining codes are 17.7% of codes but 43.4% of all scans</strong> — the single highest-impact use case in any industry analyzed.",
        "<strong>Guest review codes post a 96% active rate</strong> — every deployed review code gets scanned.",
        "<strong>Codes aged 5+ years average 7,023 scans each</strong> — long-running digital menus and property guides are the segment's best assets."
      ],
      tiers: [
        { tier: "0 scans", codesPct: 15.1, scansPct: 0 },
        { tier: "1–99", codesPct: 56.1, scansPct: 0.6 },
        { tier: "100–999", codesPct: 16.2, scansPct: 3.2 },
        { tier: "1K–9.9K", codesPct: 9.7, scansPct: 18.1 },
        { tier: "10K+", codesPct: 3.0, scansPct: 78.0, hl: true }
      ],
      accountBench: { avgScans: "142K", medScans: "23.2K", avgCodes: 81, medCodes: 22 },
      accountNote: "The median account earns 23K scans — the healthiest median-to-mean ratio in the study. One large resort group holds 42% of segment scans.",
      planTiers: [
        { plan: "Enterprise", accounts: 1, meanPerCode: 2211 },
        { plan: "Pro", accounts: 10, meanPerCode: 1063 },
        { plan: "Standard", accounts: 18, meanPerCode: 5592 },
        { plan: "Lite / Basic", accounts: 23, meanPerCode: 5480 }
      ],
      planNote: "Unusually, Standard and Lite accounts post the highest per-code rates — small, focused portfolios of very high-traffic property and menu codes.",
      tenure: [
        { band: "< 2 years", meanPerCode: 2525 },
        { band: "2–4 years", meanPerCode: 5721 },
        { band: "4–6 years", meanPerCode: 6847 },
        { band: "6+ years", meanPerCode: 640 }
      ],
      tenureInsight: "Per-code performance climbs through year six — 4–6 year customers average 6,847 scans per code, 2.7× new accounts. (The 6+ band holds a single account; treat it as anecdote, not benchmark.)",
      categories: [
        { name: "Website URL", codesPct: 73.7, scansPct: 65.9, avgActive: 1879 },
        { name: "Document", codesPct: 12.4, scansPct: 19.8, avgActive: 3522 },
        { name: "Image", codesPct: 0.7, scansPct: 7.3, avgActive: 19111 },
        { name: "Custom Page", codesPct: 2.9, scansPct: 6.3, avgActive: 4030 },
        { name: "VCard / Business Card", codesPct: 8.7, scansPct: 0.1, avgActive: 26 }
      ],
      categoryInsight: "PDF documents punch above their weight — 12.4% of codes, 19.8% of scans — property guides and menus as documents out-earn generic links.",
      design: {
        story: "Designer codes hold 64% of the portfolio and 65% of scans, with medians nearly identical (23 vs 22). Unlike other industries, no single outlier distorts the comparison — design and B&W perform comparably in hospitality.",
        designerMed: 23, bwMed: 22, designerShare: 63.8
      },
      longevity: {
        meanAge: "2.40 yrs", medianAge: "2.12 yrs", oldest: "9.3+ yrs",
        story: "Codes aged 5+ years post the segment's highest per-code rate (7,023) and hold 30% of all scans. Notably, brand-new codes under 6 months already carry 9% of scans — new digital menus attract immediate traffic."
      },
      useCases: [
        { name: "Menu / dining", codesPct: 17.7, scansPct: 43.4, avgActive: 5076, activePct: 86 },
        { name: "Brand / hotel website", codesPct: 26.5, scansPct: 16.4, avgActive: 1276, activePct: 87 },
        { name: "App download", codesPct: 4.2, scansPct: 8.9, avgActive: 5310, activePct: 71 },
        { name: "Location / maps", codesPct: 10.9, scansPct: 8.5, avgActive: 1921, activePct: 72 },
        { name: "Guest review / feedback", codesPct: 6.0, scansPct: 8.5, avgActive: 2585, activePct: 96 },
        { name: "Booking / reservation", codesPct: 2.4, scansPct: 3.4, avgActive: 2784, activePct: 90 },
        { name: "Document / information", codesPct: 4.6, scansPct: 4.2, avgActive: 2113, activePct: 76 }
      ],
      opportunities: [
        { name: "App download", avg: 5310, penetration: "~10 of 52 properties", body: "Any chain or resort with a branded app — loyalty, room key, concierge, booking — has an immediate high-value deployment; currently concentrated in a few accounts." },
        { name: "Menu / dining", avg: 5076, penetration: "~30 of 52 properties", body: "43% of all hospitality scans come from menus. Any property with a restaurant, bar, or room service that hasn't digitised its menu is leaving the segment's largest traffic source untapped." },
        { name: "Booking / reservation", avg: 2784, penetration: "~15 of 52 properties", body: "Direct-booking codes on property materials and in-room surfaces drive high-intent traffic at a 90% active rate — and route bookings around OTA commissions." },
        { name: "Guest review / feedback", avg: 2585, penetration: "~20 of 52 properties", body: "96% active rate — the highest in the segment. Review codes on tables, receipts, and checkout desks generate sustained recurring scans." },
        { name: "Document / information", avg: 2113, penetration: "~25 of 52 properties", body: "Property guides and spa brochures as PDF codes out-earn hotel-website codes — and replace collateral that's otherwise reprinted every season." }
      ],
      faqs: [
        { q: "What is a good QR code scan rate for hotels and resorts?", a: "The median active code earns 23 scans — the highest median of any industry studied; the average, 2,096, is pulled up less dramatically here than elsewhere." },
        { q: "Which QR code use case gets the most scans in hospitality?", a: "By total share, menu/dining leads by far — 17.7% of codes drive 43.4% of all scans. By per-code average, app-download codes edge slightly higher (5,310 vs 5,076), though on a much smaller share of the portfolio." },
        { q: "Do custom-designed QR codes outperform plain black-and-white codes in hotels?", a: "Barely — medians are nearly identical (23 vs 22); unlike other industries, no single outlier account distorts this comparison." },
        { q: "How long do hotel QR codes stay active before they stop getting scanned?", a: "The average live code has been in market 2.4 years, and the oldest are still scanning after 9.3+ years." },
        { q: "Does customer tenure affect QR code performance in hospitality?", a: "Through the middle tenure bands, yes — 4–6 year accounts average 6,847 scans per code, the segment's highest — though the 6+ year figure reflects a single account and is better read as an anecdote than a benchmark." },
        { q: "What percentage of hotel QR codes never get scanned?", a: "15.1% — the lowest zero-scan rate of any industry in this study." },
        { q: "What's the highest scan count recorded on a single hotel QR code?", a: "544,749 scans, on a resort property-information code." }
      ]
    },

    fnb: {
      slug: "fnb",
      heroImage: "img/hero-fnb.jpg",
      heroImageAlt: "QR Code on a beverage bottle label on a production line",
      name: "Food & Beverage Manufacturing",
      shortName: "F&B Manufacturing",
      dataAsOf: "April 2026",
      accounts: 38,
      codes: 5978,
      codesEver: 5989,
      scans: 6355668,
      scansDisplay: "6.4M",
      medianActive: 16,
      meanActive: 1487,
      meanAll: 1063,
      maxCode: 749734,
      maxCodeDesc: "a global wine brand's website code",
      activePct: 71.5,
      zeroPct: 28.5,
      dynamicPct: 94.6,
      concPctCodes: 1.49,
      concPctScans: 83.8,
      concCells: 2,
      heroLine: "A third of the portfolio is compliance codes. The scans live somewhere else entirely.",
      summary: "38 food and beverage manufacturers, 5,978 live codes, 6.4 million scans — F&B splits into 2 portfolios living side by side: a large number of QR Codes for spec sheets and labels with minimal traffic, and a small share of engagement QR Codes via brand sites, apps, promotions earning almost all the scans.",
      teaser: "F&B Manufacturing is really two portfolios wearing one label: a large body of compliance codes — spec sheets, regulatory labels — that barely get scanned, sitting alongside a much smaller set of consumer-facing codes that account for nearly all the engagement. Knowing which one you're deploying changes everything.",
      concentrationBody: "F&B Manufacturing splits cleanly in two: 1.49% of codes — the consumer-facing ones — generate 83.8% of all scans, while the rest of the portfolio, largely compliance and labeling codes, was never built to be a growth lever in the first place.",
      portfolioIntro: "F&B Manufacturing's portfolio is really two different jobs wearing one QR Code — compliance labeling that rarely gets touched, and consumer-facing codes that carry almost all the traffic.",
      dynamicNote: "of scanning codes are Dynamic QR Codes, the lowest dynamic share of any industry studied — yet Static codes still recorded <strong>zero</strong> scan activity.",
      useCaseIntro: "A third of F&B Manufacturing's QR Codes are spec sheets and labels that barely get scanned, while the smaller, consumer-facing slice — led by app downloads — earns nearly all the engagement.",
      opportunityIntro: "Each of these use cases is already proven inside F&B Manufacturing by a small number of brands — the opportunity is simply that almost nobody else has copied them yet.",
      curveIntro: "F&B Manufacturing's two-portfolio split makes the climb from typical to elite mostly about which portfolio a code belongs to. Three rungs, grounded in this industry's data.",
      ch01Title: "The Real QR Code Scan Rate for Food & Beverage Manufacturing",
      ch02Title: "Why a Few QR Codes Drive Almost All F&B Manufacturing Scans",
      ch04Title: "QR Code Destinations in Food & Beverage Packaging: What Gets Scanned",
      ch05Title: "QR Code Compliance and Consumer Use Cases: What's Deployed vs. What Performs",
      ch06Title: "High-Performing QR Code Use Cases Your F&B Manufacturing Peers Haven't Touched",
      reportHeading: "Get the shareable F&B QR benchmark report",
      tabInsights: [
        "<strong>App-download codes average 9,382 scans — the segment's highest rate</strong> — deployed by fewer than 5 of 38 manufacturers.",
        "<strong>Spec-sheet and document codes are 33.7% of the portfolio but 0.7% of scans</strong> — compliance-driven deployment at scale.",
        "<strong>Consumer survey codes post a 90% active rate</strong> — packaging feedback loops reliably get scanned."
      ],
      tiers: [
        { tier: "0 scans", codesPct: 28.5, scansPct: 0 },
        { tier: "1–99", codesPct: 53.6, scansPct: 0.9 },
        { tier: "100–999", codesPct: 12.1, scansPct: 3.7 },
        { tier: "1K–9.9K", codesPct: 4.2, scansPct: 11.5 },
        { tier: "10K+", codesPct: 1.5, scansPct: 83.8, hl: true }
      ],
      accountBench: { avgScans: "167K", medScans: "5.9K", avgCodes: 158, medCodes: 28 },
      accountNote: "One wine & spirits group drives 42% of segment scans — benchmark against the median.",
      planTiers: [
        { plan: "Enterprise", accounts: 2, meanPerCode: 191 },
        { plan: "Pro", accounts: 14, meanPerCode: 1273 },
        { plan: "Standard", accounts: 5, meanPerCode: 4005 },
        { plan: "Lite / Basic", accounts: 17, meanPerCode: 2685 }
      ],
      planNote: "Standard accounts post the highest per-code rates via small, high-traffic consumer-campaign portfolios; Pro accounts drive 87% of total scans.",
      tenure: [
        { band: "< 2 years", meanPerCode: 3487 },
        { band: "2–4 years", meanPerCode: 2436 },
        { band: "4–6 years", meanPerCode: 2449 },
        { band: "6+ years", meanPerCode: 2464 }
      ],
      tenureInsight: "Uniquely in F&B, per-code performance is flat across tenure bands (2,400–3,500). Performance here is decided by use-case mix, not by account age.",
      categories: [
        { name: "Website URL", codesPct: 63.3, scansPct: 79.8, avgActive: 1696 },
        { name: "App Store", codesPct: 0.5, scansPct: 18.3, avgActive: 41478 },
        { name: "Document", codesPct: 33.9, scansPct: 0.7, avgActive: 36 },
        { name: "Image", codesPct: 0.2, scansPct: 1.2, avgActive: 10423 },
        { name: "VCard / Business Card", codesPct: 0.8, scansPct: 0.05, avgActive: 66 }
      ],
      categoryInsight: "App Store codes are 0.5% of the portfolio but 18.3% of all scans, averaging 41,478 each — the most extreme category outperformance in the study.",
      design: {
        story: "F&B reverses the pattern: black-and-white codes earn 81% of scans from half the portfolio, and out-perform designer codes at the median too (23 vs 11). The top consumer brands here predominantly ship plain codes; designer codes cluster in low-traffic document contexts.",
        designerMed: 11, bwMed: 23, designerShare: 50.5
      },
      longevity: {
        meanAge: "2.35 yrs", medianAge: "2.24 yrs", oldest: "10.5+ yrs",
        story: "Codes created 4–5 years ago hold 32% of all scans — packaging printed in 2021–2022 is still the segment's biggest earner. The oldest live code has been scanning for over a decade."
      },
      useCases: [
        { name: "Brand / product website", codesPct: 31.1, scansPct: 59.4, avgActive: 2633, activePct: 77 },
        { name: "App download", codesPct: 2.4, scansPct: 16.8, avgActive: 9382, activePct: 80 },
        { name: "Promotional campaign", codesPct: 14.5, scansPct: 12.2, avgActive: 1067, activePct: 84 },
        { name: "Consumer survey / feedback", codesPct: 3.5, scansPct: 4.2, avgActive: 1397, activePct: 90 },
        { name: "Nutrition / regulatory label", codesPct: 2.8, scansPct: 2.7, avgActive: 1775, activePct: 57 },
        { name: "Document / spec sheet", codesPct: 33.7, scansPct: 0.7, avgActive: 36, activePct: 58 },
        { name: "Traceability / origin", codesPct: 1.2, scansPct: 0.4, avgActive: 516, activePct: 72 }
      ],
      opportunities: [
        { name: "App download", avg: 9382, penetration: "< 5 of 38 accounts", body: "The highest-earning use case in F&B. Any brand with a consumer app — loyalty, recipes, nutrition, ordering — has an immediate packaging deployment." },
        { name: "Nutrition / regulatory label", avg: 1775, penetration: "~10 of 38 accounts", body: "EU and FDA labelling requirements make this a permanent, non-optional use case for regulated markets. Every SKU needs a code." },
        { name: "Consumer survey / feedback", avg: 1397, penetration: "< 10 of 38 accounts", body: "90% active rate — post-purchase NPS and product feedback on packaging consistently generates traffic and first-party data." },
        { name: "Traceability / origin", avg: 516, penetration: "~6 of 38 accounts", body: "Farm-to-fork traceability is a rising consumer expectation and regulatory requirement (EUDR, GS1 Digital Link). Penetration today is minimal." },
        { name: "Recipe / how-to", avg: 195, penetration: "~8 of 38 accounts", body: "84% active rate. Recipe codes drive repeat scans and brand engagement — one of the most natural F&B packaging use cases, barely deployed." }
      ],
      faqs: [
        { q: "What is a good QR code scan rate for food & beverage manufacturers?", a: "The median active code earns 16 scans; the average, 1,487, is pulled up by a small set of high-traffic consumer codes." },
        { q: "What share of F&B manufacturing QR codes are compliance codes?", a: "Document/spec-sheet codes — largely compliance and regulatory labeling — are 33.7% of the portfolio but just 0.7% of scans." },
        { q: "Which QR code use case has the highest engagement in F&B manufacturing?", a: "App-download codes, averaging 9,382 scans per active code — the highest in the industry — though deployed by fewer than 5 of 38 manufacturers." },
        { q: "Do custom-designed QR codes outperform black-and-white codes on food packaging?", a: "No — F&B reverses the pattern seen elsewhere: black-and-white codes out-scan designer codes at the median (23 vs 11), since top consumer brands here tend to ship plain codes while designer codes cluster in low-traffic document contexts." },
        { q: "Does customer tenure affect QR code performance for F&B manufacturers?", a: "Uniquely in this industry, no — per-code performance stays flat (roughly 2,400–3,500 scans) across every tenure band; use-case mix drives performance here, not account age." },
        { q: "How concentrated is scan volume in F&B manufacturing?", a: "1.49% of codes generate 83.8% of all scans." },
        { q: "How long do F&B manufacturing QR codes stay active?", a: "The average live code has been in market 2.35 years, and the oldest are still scanning after 10.5+ years." },
        { q: "What's the highest scan count recorded on a single F&B QR code?", a: "749,734 scans, on a global wine brand's website code." }
      ]
    }
  }
};

const INDUSTRY_ORDER = ["cpg", "mi", "hotels", "fnb"];

/* ---- helpers shared by both pages ---- */
function fmt(n){ return n.toLocaleString("en-US"); }
function fmtCompact(n){
  if(n >= 1e6) return (n/1e6).toFixed(1).replace(/\.0$/,"") + "M";
  if(n >= 1e3) return (n/1e3).toFixed(n >= 1e5 ? 0 : 1).replace(/\.0$/,"") + "K";
  return String(n);
}
/* position (%) on a log scale from 1 to max */
function logPos(v, max){
  const lo = Math.log10(1), hi = Math.log10(max);
  return Math.min(100, Math.max(0, (Math.log10(Math.max(v,1)) - lo) / (hi - lo) * 100));
}
