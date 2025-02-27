import React, { useState } from "react";
import "../Styles/FAQ.css"; // Ensure to link the CSS file for styles

const FAQData = {
  questions: [
    {
      question:
        "🌍 How This Model Contributes to Individual Growth, Poverty Reduction & Financial Stability and Employability 🚀",
      answer: {
        intro:
          "This model—offering rural infrastructure to businesses in exchange for job security, skill education, and empowerment—creates a sustainable path for individuals to escape poverty and achieve financial stability.",
        conclusion:
          "By empowering individuals with jobs, skills, and financial stability, this model has the potential to drastically reduce poverty and enhance employability, creating a self-sustaining rural economy.",
        points: [
          {
            point: "1️⃣ Immediate Job Creation 🏭➡️👷",
            explanation:
              "🔹 More businesses in villages = More job opportunities for local people.\n🔹 Provides stable incomes to individuals who previously relied on irregular farming wages.\n🔹 Reduces seasonal unemployment (especially for farmers who earn only during harvest).",
            example:
              "🌍 Example: China's rural industrialisation created 100M+ non-agriculture jobs, drastically reducing rural poverty.",
            individualImpact: [
              "✔ Guaranteed jobs = Regular income = Less poverty",
              "✔ Steady wages = Ability to save & invest in future",
            ],
          },
          {
            point: "2️⃣ Skill Development & Career Growth - Employability 🎓👨‍💻",
            explanation:
              "🔹 Companies setting up in villages will train locals in digital, technical, and vocational skills.\n🔹 People shift from low-wage labor to high-paying, skilled jobs (e.g., manufacturing, IT support, business management).\n🔹 Empowers youth with modern skills (coding, digital marketing, automation, AI, agri-tech, etc.), making them employable worldwide.",
            example:
              "🌍 Example: India’s Skill India initiative has helped 5M+ youth get skilled & move into better jobs.",
            individualImpact: [
              "✔ No longer dependent on low-income agriculture",
              "✔ Reskilling → Career Growth → Higher Salaries",
              "✔ Tech & entrepreneurship exposure creates self-sufficiency",
            ],
          },
          {
            point: "3️⃣ Financial Independence & Wealth Creation 💰🏡",
            explanation:
              "🔹 With stable jobs, individuals can start saving & investing in assets like land, education, or small businesses.\n🔹 More income means they can afford better healthcare, nutrition, and education for their children.\n🔹 Empowers women by giving them economic independence, reducing gender inequality.",
            example:
              "🌍 Example: Microfinance in Bangladesh (Grameen Bank) helped millions of women start small businesses & achieve economic independence.",
            individualImpact: [
              "✔ No longer reliant on loans & debt cycles",
              "✔ Financial security for future generations",
              "✔ Women’s economic empowerment improves family stability",
            ],
          },
          {
            point:
              "4️⃣ Reduced Migration to Cities & Better Quality of Life 🏡➡️🚀",
            explanation:
              "🔹 With better opportunities in villages, people don’t have to migrate to overcrowded cities for low-paying jobs.\n🔹 They can stay with their families, improving their social & emotional well-being.\n🔹 Reduces slums & urban poverty by balancing job distribution across India.",
            example:
              "🌍 Example: Germany’s “Smart Villages” program improved rural infrastructure, making village life sustainable.",
            individualImpact: [
              "✔ Better living conditions with family support",
              "✔ Less urban stress → Improved mental health & well-being",
              "✔ Stronger rural communities = Better local governance & infrastructure",
            ],
          },
          {
            point:
              "5️⃣ Entrepreneurial Opportunities & Self-Sustainability 📈🚀",
            explanation:
              "🔹 Once skilled, individuals don’t just become workers—they can start their own businesses.\n🔹 Small-scale manufacturing, agri-tech, handicrafts, digital services create a rural entrepreneurship ecosystem.\n🔹 Business success means job creation for others, creating a self-sustaining rural economy.",
            example:
              "🌍 Example: India’s MSME sector contributes 30% of GDP, and rural startups are now scaling globally!",
            individualImpact: [
              "✔ People become job creators, not job seekers",
              "✔ Builds long-term financial stability & generational wealth",
              "✔ Villagers can sell products globally via e-commerce & exports",
            ],
          },
        ],
        finalConclusion:
          "🚀 Final Conclusion: A Path from Poverty to Prosperity\n✔ From unemployment → Stable jobs → Skilled workforce → Financially independent individuals 🎓💼\n✔ From poverty → Savings → Investment → Wealth creation 💰🏡\n✔ From migration → Sustainable village life → Community growth 🏡🚀\n💡 This model isn’t just about economic growth—it’s about transforming lives! 🔥",
      },
    },
    {
      question: "🌍 How This Model Contributes to India's Economic Growth 🚀",
      answer: {
        points: [
          {
            point: "1️⃣ Generating Large-Scale Employment 👨‍🌾➡️👨‍💻",
            explanation:
              "🔹 Direct Impact: Rural businesses create millions of new jobs, reducing unemployment.\n🔹 Indirect Impact: More jobs = higher income = increased spending in local markets.\n🔹 Effect: A stronger middle class drives GDP growth and economic stability.",
            example:
              "🌍 Example: China’s rural industrialisation helped lift 800M+ people out of poverty—India can do the same!",
          },
          {
            point:
              "2️⃣ Boosting Rural Economy & Reducing Migration and Overpopulation of Metropolitan Cities 🏡➡️🏙️",
            explanation:
              "🔹 Rural businesses keep wealth circulating within villages instead of shifting to cities.\n🔹 Reduces mass migration to urban areas, easing overpopulation in cities.\n🔹 Strengthens local supply chains, agriculture, and small businesses.",
            example:
              "🌍 Example: Grameen Bank (Bangladesh) and Microfinancing created self-sustaining rural economies, reducing poverty drastically.",
          },
          {
            point: "3️⃣ Increasing India’s GDP & Industrial Output 📈🏭",
            explanation:
              "🔹 Rural MSMEs contribute 30%+ to India’s GDP—this model can push it to 40-50%.\n🔹 More factories, startups, and agri-businesses = higher domestic and export production.\n🔹 Strengthens India’s position as a global manufacturing hub (Make in India boost!).",
            example:
              "🌍 Example: China’s “Township & Village Enterprises” (TVEs) were a major factor in its rise to a global economy.",
          },
          {
            point: "4️⃣ Strengthening India’s Export Market 🌎📦",
            explanation:
              "🔹 Village-based industries (textiles, handicrafts, organic products, agri-tech) can export globally.\n🔹 Increases foreign exchange earnings and improves India’s trade balance.\n🔹 Eco-friendly & handmade products have global demand—rural India can lead!",
            example:
              "🌍 Example: Vietnam used rural labour to become a global leader in textile & electronic exports.",
          },
          {
            point: "5️⃣ Skill Development & Technological Growth 🎓💡",
            explanation:
              "🔹 This model educates and trains villagers in tech, manufacturing, and digital services.\n🔹 Bridges the skill gap → Creates a new generation of digital & industrial workers.\n🔹 More tech adoption in rural India = higher productivity and long-term economic growth.",
            example:
              "🌍 Example: China’s vocational training boom helped it dominate high-tech manufacturing.",
          },
        ],
        finalConclusion:
          "🚀 Conclusion: A Game-Changer for India's Economy\n✔ More jobs = More spending = Higher GDP 📈\n✔ Stronger rural economy = Balanced development 🏡\n✔ Higher exports = More foreign income 🌎\n✔ Skill development = Future-ready workforce 🎓\n💡 This model isn’t just a business idea—it’s a national economic strategy! 💥🔥",
      },
    },
    {
      question: "Question: Why Would Businesses Accept This Offer?",
      answer: {
        intro:
          "💡 It’s a win-win model! Businesses get low-cost infrastructure, tax benefits, skilled labor, and sustainability advantages, while villagers get jobs, skill development, and economic empowerment.",
        points: [
          {
            point: "1️⃣ Low-Cost Infrastructure & Operations 🏠",
            details: [
              "✅ Cheap Land & Office Space",
              "✅ Affordable Manufacturing – Villages offer low-cost labor, raw materials, and land, reducing production costs.",
              "✅ Tax Benefits & Govt Subsidies – Many states offer tax exemptions, MSME benefits, and rural development grants.",
            ],
          },
          {
            point: "2️⃣ Access to a Large, Untapped Workforce 👨‍🌾",
            details: [
              "✅ Skilled & Semi-Skilled Labor – Businesses can train & hire local talent at competitive salaries.",
              "✅ Loyal & Long-Term Employees – Lower attrition rates compared to cities, where job-hopping is common.",
              "✅ Job Creation Builds Brand Reputation – Supporting rural employment boosts CSR (Corporate Social Responsibility).",
            ],
          },
          {
            point: "3️⃣ Government & NGO Support 💰",
            details: [
              "✅ Eligible for Startup India, Skill India, and Make in India grants.",
              "✅ NGOs and government bodies can co-fund training programs & infrastructure.",
              "✅ Special low-interest loans & subsidies for businesses operating in rural areas.",
            ],
          },
          {
            point: "4️⃣ Sustainable & Eco-Friendly Business Growth 🌱",
            details: [
              "✅ Green & Pollution-Free Environment – Ideal for organic farming, eco-tourism, and sustainable businesses.",
              "✅ Renewable Energy Benefits – Villages are great for solar, wind, and bio-energy projects with lower land costs.",
              "✅ Carbon Footprint Reduction – Businesses operating in rural areas can earn carbon credits & sustainability certifications.",
            ],
          },
          {
            point: "5️⃣ Unique Business Opportunities & Markets 📈",
            details: [
              "✅ Direct Access to Rural Markets – Companies can test, market, and sell products directly in villages.",
              "✅ New Supply Chain Hubs – Businesses can set up rural warehouses for easier distribution.",
              "✅ First-Mover Advantage – Early adopters gain trust & market dominance in underdeveloped areas.",
            ],
          },
          {
            point: "6️⃣ Enhanced Brand Image & Media Coverage 📰",
            details: [
              "✅ Social Impact Branding – Businesses supporting rural development get positive PR.",
              "✅ More Investment Opportunities – Impact investors & VC firms prefer businesses with social responsibility.",
              "✅ International Recognition – Companies can apply for global social impact grants & awards.",
            ],
          },
        ],
      },
    },
    {
      question:
        "Question: Which type of Company will be beneficial by this so they would choose it",
      answer: {
        intro:
          "Several types of companies can greatly benefit from your rural infrastructure initiative, especially those that rely on low-cost operations, skilled labor, and government incentives.",
        points: [
          {
            point: "🏭 1. Manufacturing & Production Companies",
            details: [
              "✔ Textile & Garment Factories – Rural areas offer cheap labor for stitching, weaving, and embroidery.",
              "✔ Handicrafts & Artisan Products – Ideal for woodwork, pottery, and traditional crafts with global demand.",
              "✔ Food Processing & Packaging – Villages provide raw materials for food-related businesses like dairy, grains, and organic products.",
            ],
          },
          {
            point: "🚜 2. Agribusiness & Agri-Tech Companies",
            details: [
              "✔ Organic Farming & Export Units – Demand for organic food is rising in global markets.",
              "✔ Agri-Tech Startups – Companies can implement AI, IoT, and automation for smart farming.",
              "✔ Dairy & Poultry Farming – Livestock businesses thrive in villages with abundant space and resources.",
            ],
          },
          {
            point: "🛒 3. E-Commerce & Rural Marketplaces",
            details: [
              "✔ Handmade & Rural Products Marketplaces – Platforms that sell village-made goods to urban and global consumers.",
              "✔ B2B Wholesale & Logistics – Supply chain hubs for FMCG, groceries, and raw materials.",
              "✔ Farm-to-Consumer Platforms – Apps for direct farm produce sales (like fresh vegetables & dairy).",
            ],
          },
          {
            point: "🛠️ 4. Small-Scale Industries & MSMEs",
            details: [
              "✔ Furniture & Home Decor Factories – Handmade wooden and bamboo furniture businesses can thrive.",
              "✔ Recycling & Upcycling Units – Plastic, paper, and e-waste recycling plants in villages.",
              "✔ Solar Panel & Renewable Energy Manufacturing – Low-cost solar panel assembly and wind energy production hubs.",
            ],
          },
          {
            point: "🏗️ 5. Construction & Infrastructure Development Companies",
            details: [
              "✔ Affordable Housing & Rural Construction – Companies can build low-cost housing solutions.",
              "✔ Smart Village Infrastructure – Internet, renewable energy, and smart irrigation system providers.",
              "✔ Eco-Friendly Building Material Production – Compressed earth bricks, bamboo-based construction, and prefab structures.",
            ],
          },
          {
            point: "🎓 6. Ed-Tech & Skill Development Startups",
            details: [
              "✔ Vocational Training Centers – IT, electrical, carpentry, digital marketing, etc.",
              "✔ Online Education Platforms – Providing digital learning to rural students.",
              "✔ AI-Powered Skill Training – Smart job-matching & upskilling programs for villagers.",
            ],
          },
          {
            point: "🛑 Which Companies Won’t Work Well?",
            details: [
              "❌ High-end tech startups that need city infrastructure (e.g., fintech, SaaS)",
              "❌ Luxury brands needing urban consumer bases",
              "❌ Heavy industries requiring complex logistics (e.g., steel plants)",
            ],
          },
        ],
        finalConclusion:
          "🚀 Conclusion: Who Should Join?\nThis model is best for businesses looking for cost-effective expansion, skilled labor, and government support while making a social impact.",
      },
    },
    {
      question:
        "Question: Why Does This Model Work Best in India than Other Countries?",
      answer: {
        intro: "🌍 Why This Model Works Best in India?",
        points: [
          {
            point:
              "1️⃣ Young & Growing Workforce 👨‍💻 (Unlike Aging Populations in Other Countries)",
            explanation:
              "India’s median age is just ~28 years, while countries like China (~39), Japan (~48), and the USA (~38) are aging.\nYouth-driven economy → India has the world’s largest working-age population ready for employment.\nVillages have untapped labour potential → Over 65% of Indians live in rural areas, creating a massive workforce for businesses.",
            reason:
              "✔ In ageing countries, businesses struggle to find workers → India provides abundant, affordable labour.\n✔ Rural India is hungry for jobs, making it easier to train & retain employees.",
          },
          {
            point:
              "2️⃣ India is the World’s 5th Largest Economy 💰 (Growing Fast!)",
            explanation:
              "India surpassed the UK and will become the 3rd largest economy by 2030.\nRapid industrial & digital transformation makes it easier for businesses to scale.\nForeign Direct Investment (FDI) growth – Global companies are already investing in India due to its business-friendly policies.",
            reason:
              "✔ Strong economic growth = More business demand.\n✔ India’s MSME & startup ecosystem is booming, making rural expansions profitable.\n✔ Government support (Make in India, Atmanirbhar Bharat) encourages companies to invest in rural areas.",
          },
          {
            point:
              "3️⃣ India is the Most Populous Country 🌏 (Largest Consumer & Workforce Market)",
            explanation:
              "1.4+ billion people → Largest consumer base & workforce in the world.\nVillages are a huge untapped market → Rural India contributes to over 50% of India’s GDP.\nRising middle class = More demand for goods, services, and jobs.",
            reason:
              "✔ No other country has such a large & growing consumer base.\n✔ Companies setting up in villages can sell directly to millions of rural consumers.\n✔ More demand = More industries = More jobs for villagers.",
          },
          {
            point: "🚀 Why Other Countries Can’t Copy This Easily?",
            details: [
              "❌ China’s population is aging, and many industries are shifting to automation rather than labor-intensive models.",
              "❌ Developed countries like the US & UK have urbanized economies & more automated industries, meaning limited scope for rural expansion.",
              "❌ African nations face political instability and lack of infrastructure.",
            ],
          },
        ],
      },
    },
  ],
};

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <div className="faq-container ">
      {FAQData.questions.map((question, index) => (
        <div key={index} className="faq-item border ">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <h4 style={{ display: "inline" }}>{question.question}</h4>
            <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
          </div>

          {openIndex === index && (
            <div className="faq-answer">
              <p className="intro">{question.answer.intro}</p>

              {question.answer.points.map((point, i) => (
                <div key={i} className="faq-point">
                  <h4>{point.point}</h4>
                  <p>{point.explanation}</p>
                  {point.details &&
                    point.details.map((detail) => {
                      return <p> {detail}</p>;
                    })}
                  {point.example && (
                    <strong className="text-primary">Example:</strong>
                  )}
                  <p>{point.example}</p>
                  {point.reason && <p>{point.reason}</p>}
                  {point.individualImpact && (
                    <span className="text-black">Individual impact:</span>
                  )}
                  {point.individualImpact &&
                    point.individualImpact.map((impact) => {
                      return <p>{impact}</p>;
                    })}
                </div>
              ))}

              {question.individualImpact && (
                <p className="text-black">
                  <strong>Individual impact:</strong>
                  {question.individualImpact}
                </p>
              )}
              {question.answer.conclusion && (
                <p className="text-black">
                  <strong>Conclusion:</strong> {question.answer.conclusion}
                </p>
              )}
              {question.answer.finalConclusion && (
                <p className="text-black">
                  <strong>Final Conlclusion:</strong>{" "}
                  {question.answer.finalConclusion}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
