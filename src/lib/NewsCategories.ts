import type { News } from "./types"
import { Briefcase, Heart, Microscope, Film, Trophy, Globe, Zap, Cpu, Smartphone, Palette, Car, Home } from "lucide-react"

export const newsCategories = [
  {
    id: "technology",
    name: "Technology",
    icon: Cpu,
    subcategories: [
      { id: "ai", name: "Artificial Intelligence" },
      { id: "ml", name: "Machine Learning" },
      { id: "startups", name: "Startups" },
      { id: "gadgets", name: "Gadgets" },
      { id: "software", name: "Software" },
      { id: "cybersecurity", name: "Cybersecurity" },
      { id: "blockchain", name: "Blockchain" },
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: Briefcase,
    subcategories: [
      { id: "finance", name: "Finance" },
      { id: "economy", name: "Economy" },
      { id: "entrepreneurship", name: "Entrepreneurship" },
      { id: "markets", name: "Markets" },
      { id: "real-estate", name: "Real Estate" },
      { id: "careers", name: "Careers" },
    ],
  },
  {
    id: "health",
    name: "Health",
    icon: Heart,
    subcategories: [
      { id: "fitness", name: "Fitness" },
      { id: "nutrition", name: "Nutrition" },
      { id: "mental-health", name: "Mental Health" },
      { id: "medicine", name: "Medicine" },
      { id: "wellness", name: "Wellness" },
      { id: "healthcare", name: "Healthcare" },
    ],
  },
  {
    id: "science",
    name: "Science",
    icon: Microscope,
    subcategories: [
      { id: "space", name: "Space" },
      { id: "environment", name: "Environment" },
      { id: "research", name: "Research" },
      { id: "physics", name: "Physics" },
      { id: "biology", name: "Biology" },
      { id: "chemistry", name: "Chemistry" },
      { id: "climate", name: "Climate" },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Film,
    subcategories: [
      { id: "movies", name: "Movies" },
      { id: "music", name: "Music" },
      { id: "celebrity", name: "Celebrity" },
      { id: "tv-shows", name: "TV Shows" },
      { id: "gaming", name: "Gaming" },
      { id: "streaming", name: "Streaming" },
    ],
  },
  {
    id: "sports",
    name: "Sports",
    icon: Trophy,
    subcategories: [
      { id: "football", name: "Football" },
      { id: "basketball", name: "Basketball" },
      { id: "tennis", name: "Tennis" },
      { id: "soccer", name: "Soccer" },
      { id: "olympics", name: "Olympics" },
      { id: "esports", name: "Esports" },
    ],
  },
  {
    id: "world",
    name: "World News",
    icon: Globe,
    subcategories: [
      { id: "politics", name: "Politics" },
      { id: "conflicts", name: "Conflicts" },
      { id: "diplomacy", name: "Diplomacy" },
      { id: "europe", name: "Europe" },
      { id: "asia", name: "Asia" },
      { id: "americas", name: "Americas" },
    ],
  },
  {
    id: "trending",
    name: "Trending",
    icon: Zap,
    subcategories: [
      { id: "viral", name: "Viral Stories" },
      { id: "social-media", name: "Social Media" },
      { id: "popular", name: "Most Read" },
      { id: "breaking", name: "Breaking News" },
      { id: "debates", name: "Current Debates" },
      { id: "fact-checks", name: "Fact Checks" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    subcategories: [
      { id: "ios", name: "iOS" },
      { id: "android", name: "Android" },
      { id: "apps", name: "Apps" },
      { id: "mobile-dev", name: "Mobile Development" },
      { id: "5g", name: "5G" },
      { id: "wearables", name: "Wearables" },
    ],
  },
  {
    id: "culture",
    name: "Culture",
    icon: Palette,
    subcategories: [
      { id: "art", name: "Art" },
      { id: "history", name: "History" },
      { id: "literature", name: "Literature" },
      { id: "architecture", name: "Architecture" },
      { id: "festivals", name: "Festivals" },
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    subcategories: [
      { id: "electric-vehicles", name: "Electric Vehicles" },
      { id: "self-driving", name: "Self-Driving Cars" },
      { id: "motorsports", name: "Motorsports" },
      { id: "car-reviews", name: "Car Reviews" },
      { id: "industry-news", name: "Industry News" },
    ],
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: Home,
    subcategories: [
      { id: "travel", name: "Travel" },
      { id: "food-drink", name: "Food & Drink" },
      { id: "fashion", name: "Fashion" },
      { id: "home-living", name: "Home & Living" },
      { id: "personal-finance", name: "Personal Finance" },
      { id: "relationships", name: "Relationships" },
    ],
  },
]

const newsData: News[] = [
  {
    id: "1",
    title: "AI Breakthrough: New Model Understands Context Better Than Ever",
    excerpt:
      "Researchers have developed a new AI model that can understand context in conversations with unprecedented accuracy, opening new possibilities for human-computer interaction.",
    content: `<p>Researchers at a leading AI lab have announced a breakthrough in natural language processing that allows AI systems to understand context in conversations with unprecedented accuracy.</p>
    
    <p>The new model, called ContextNet, uses a novel architecture that allows it to maintain awareness of conversational history and environmental cues, much like humans do when communicating.</p>
    
    <p>"This is a significant step forward," said Dr. Jane Smith, lead researcher on the project. "Previous models could follow conversations, but they often missed subtle contextual shifts or references. ContextNet can track these nuances much more effectively."</p>
    
    <p>In benchmark tests, ContextNet demonstrated a 35% improvement in contextual understanding compared to previous state-of-the-art models. This improvement could lead to more natural and helpful AI assistants, more accurate translation services, and better content moderation systems.</p>
    
    <p>The team plans to release a research paper detailing their methodology next month, along with a limited API that will allow developers to experiment with the technology.</p>
    
    <p>Industry experts suggest this advancement could accelerate the development of AI systems that can serve as more effective collaborators in professional settings, from healthcare to education.</p>`,
    summary:
      "A groundbreaking AI model called ContextNet has been developed that demonstrates a 35% improvement in understanding conversational context compared to previous models. This advancement could revolutionize AI assistants, translation services, and content moderation systems.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "AI",
    date: "May 15, 2023",
  },
  {
    id: "2",
    title: "Quantum Computing Reaches New Milestone with 1000-Qubit Processor",
    excerpt:
      "A major tech company has unveiled a 1000-qubit quantum processor, bringing practical quantum computing applications closer to reality.",
    content: `<p>In a major leap forward for quantum computing, researchers have unveiled a 1000-qubit quantum processor, shattering previous records and bringing practical quantum computing applications closer to reality.</p>
    
    <p>The new processor, developed by QuantumTech Inc., represents a tenfold increase in qubit count compared to the company's previous generation processor. More importantly, the team has managed to maintain quantum coherence—the delicate quantum state necessary for computation—for significantly longer periods.</p>
    
    <p>"Reaching 1000 qubits while maintaining acceptable error rates is something many thought was still years away," said Dr. Robert Johnson, Chief Quantum Officer at QuantumTech. "This breakthrough puts us on a path to quantum advantage for certain specialized problems within the next 18-24 months."</p>
    
    <p>Quantum computers leverage the principles of quantum mechanics to perform certain calculations exponentially faster than classical computers. They hold particular promise for simulating molecular interactions for drug discovery, optimizing complex systems like global supply chains, and breaking currently unbreakable encryption.</p>
    
    <p>The company has already begun collaborating with pharmaceutical companies to explore how the new processor might accelerate drug discovery efforts.</p>
    
    <p>While a general-purpose quantum computer that outperforms classical computers across all tasks remains distant, this milestone represents a significant step toward practical quantum applications in specific domains.</p>`,
    summary:
      "QuantumTech Inc. has developed a groundbreaking 1000-qubit quantum processor that maintains quantum coherence for longer periods. This achievement puts practical quantum computing applications within reach in the next 18-24 months, with potential applications in drug discovery, supply chain optimization, and cryptography.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Technology",
    date: "June 3, 2023",
  },
  {
    id: "3",
    title: "New Study Links Regular Exercise to Improved Brain Function in Older Adults",
    excerpt:
      "Research shows that consistent physical activity can significantly enhance cognitive abilities and potentially reduce the risk of dementia in people over 65.",
    content: `<p>A comprehensive new study has found that regular exercise can significantly enhance cognitive abilities and potentially reduce the risk of dementia in adults over 65.</p>
    
    <p>The research, conducted over a five-year period with more than 3,000 participants, found that those who engaged in moderate physical activity for at least 150 minutes per week showed markedly better performance on cognitive tests compared to sedentary individuals.</p>
    
    <p>"What's particularly encouraging about these findings is that it's never too late to start," said Dr. Maria Chen, the study's lead author. "Participants who began regular exercise regimens during the study period still showed significant improvements, even if they had been inactive before."</p>
    
    <p>The study found that aerobic exercises like walking, swimming, and cycling were particularly beneficial, though strength training also showed positive effects when combined with cardio activities.</p>
    
    <p>Brain scans of participants revealed that regular exercisers maintained greater volume in the hippocampus—a brain region critical for memory—than their sedentary counterparts. They also showed stronger connections between different brain regions.</p>
    
    <p>While the study doesn't prove that exercise can prevent dementia, it adds to a growing body of evidence suggesting physical activity is one of the most effective interventions for maintaining cognitive health in later life.</p>
    
    <p>Health authorities recommend that older adults aim for at least 150 minutes of moderate-intensity exercise per week, ideally spread across multiple days.</p>`,
    summary:
      "A five-year study with over 3,000 participants found that adults over 65 who exercise regularly for at least 150 minutes per week show significantly better cognitive performance and brain health. Both aerobic exercise and strength training proved beneficial, with participants maintaining greater volume in the hippocampus region of the brain.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Health",
    date: "July 12, 2023",
  },
  {
    id: "4",
    title: "Sustainable Aviation Fuel Production Set to Scale with New Technology",
    excerpt:
      "A breakthrough in biofuel production could make sustainable aviation fuel economically competitive with conventional jet fuel for the first time.",
    content: `<p>A breakthrough in biofuel production technology could make sustainable aviation fuel (SAF) economically competitive with conventional jet fuel for the first time, potentially transforming the environmental impact of air travel.</p>
    
    <p>The new process, developed by GreenJet Biosciences, can convert agricultural waste and other sustainable biomass into jet fuel at approximately half the cost of previous methods. This dramatic cost reduction could help airlines meet their increasingly ambitious carbon reduction targets.</p>
    
    <p>"Until now, sustainable aviation fuel has typically cost 3-5 times more than conventional jet fuel, which has severely limited adoption," said Emma Rodriguez, CEO of GreenJet. "Our process brings that premium down to about 15-20%, which is within the range many airlines have indicated they're willing to pay for environmental benefits."</p>
    
    <p>The aviation industry currently accounts for approximately 2.5% of global carbon emissions, a figure expected to rise as air travel continues to grow. Unlike ground transportation, which can be electrified, long-haul aviation is likely to depend on liquid fuels for decades to come due to the energy density requirements of flight.</p>
    
    <p>GreenJet has already secured partnerships with two major airlines to begin scaling production, with the first commercial-scale facility expected to come online in 2024. The company projects it could produce up to 100 million gallons of SAF annually by 2026.</p>
    
    <p>Industry analysts note that while 100 million gallons represents less than 0.2% of global jet fuel consumption, the technology could be replicated widely if it proves successful at scale.</p>`,
    summary:
      "GreenJet Biosciences has developed a breakthrough process that cuts the cost of sustainable aviation fuel (SAF) production by half, making it only 15-20% more expensive than conventional jet fuel. This could help airlines meet carbon reduction targets, with the first commercial-scale facility expected in 2024 and production of up to 100 million gallons annually by 2026.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Environment",
    date: "August 5, 2023",
  },
  {
    id: "5",
    title: "Global Chip Shortage Expected to Ease by Late 2023",
    excerpt:
      "Industry analysts predict relief from the semiconductor shortage that has affected everything from cars to gaming consoles over the past two years.",
    content: `<p>Industry analysts are predicting that the global semiconductor shortage, which has affected industries from automotive to consumer electronics for over two years, will finally begin to ease by late 2023.</p>
    
    <p>The shortage, triggered by pandemic-related disruptions and exacerbated by surging demand, has caused production delays and price increases across multiple sectors. However, several factors now point to improving conditions in the semiconductor supply chain.</p>
    
    <p>"We're seeing significant capacity expansions coming online in the second half of 2023," said Michael Wong, semiconductor analyst at Global Tech Insights. "Combined with some softening in consumer demand due to economic conditions, this should bring supply and demand back into better balance."</p>
    
    <p>Major chipmakers have invested heavily in new fabrication plants, with over $200 billion in new capacity announced since 2021. While the most advanced facilities take years to build, several are now nearing completion.</p>
    
    <p>The automotive industry, which has been particularly hard-hit by the shortage, is expected to see the greatest improvement. "Vehicle production has been constrained by as much as 20% due to chip shortages," said Sarah Johnson, an automotive industry consultant. "We expect that constraint to drop to single digits by Q4 2023."</p>
    
    <p>Consumer electronics availability should also improve, though analysts caution that the newest and most advanced products using cutting-edge chips may still face some constraints through 2024.</p>
    
    <p>The easing shortage could also help moderate inflation in technology products, which have seen above-average price increases during the shortage period.</p>`,
    summary:
      "Industry analysts predict the global semiconductor shortage will ease by late 2023 as significant manufacturing capacity expansions come online and consumer demand softens. The automotive industry should see constraints drop to single digits by Q4 2023, while consumer electronics availability will also improve, potentially helping to moderate inflation in technology products.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Business",
    date: "September 18, 2023",
  },
  {
    id: "6",
    title: "New Antibiotic Discovered Using AI Shows Promise Against Resistant Bacteria",
    excerpt:
      "Scientists have identified a novel antibiotic compound using machine learning that can kill bacteria resistant to all existing antibiotics.",
    content: `<p>Scientists have discovered a promising new antibiotic using artificial intelligence that shows effectiveness against bacteria resistant to all existing antibiotics, potentially opening a new front in the fight against antimicrobial resistance.</p>
    
    <p>The compound, named Halicin after the fictional AI HAL 9000, was identified using a deep learning algorithm trained to recognize molecular structures likely to have antibacterial properties. The AI approach allowed researchers to screen millions of potential chemical compounds in a fraction of the time traditional methods would require.</p>
    
    <p>"This represents a fundamentally different approach to antibiotic discovery," said Dr. James Collins, who led the research team. "Instead of growing bacteria in the lab and testing compounds against them, we're using computational methods to predict which molecules will be effective before we even synthesize them."</p>
    
    <p>In laboratory tests, Halicin successfully killed many bacteria that have developed resistance to existing antibiotics, including Clostridium difficile, Acinetobacter baumannii, and Mycobacterium tuberculosis. Particularly promising was its effectiveness against gram-negative bacteria, which have an additional outer membrane that makes them especially difficult to treat.</p>
    
    <p>The discovery comes at a critical time, as antimicrobial resistance is considered one of the greatest threats to global health. Current projections suggest drug-resistant infections could cause 10 million deaths annually by 2050 if no new antibiotics are developed.</p>
    
    <p>Halicin works through a mechanism different from existing antibiotics, which may explain why bacteria haven't evolved resistance to it. The compound appears to disrupt the bacterial cell membrane's ability to maintain an electrochemical gradient necessary for energy storage.</p>
    
    <p>The compound is now entering preclinical testing, with human trials potentially beginning within two years if all goes well.</p>`,
    summary:
      "Scientists have discovered a new antibiotic named Halicin using AI to screen millions of potential compounds. The antibiotic shows effectiveness against bacteria resistant to all existing antibiotics, including difficult-to-treat gram-negative bacteria. It works through a novel mechanism that disrupts bacterial cell membranes, and is now entering preclinical testing with potential human trials within two years.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Science",
    date: "October 7, 2023",
  },
  {
    id: "7",
    title: "Remote Work Leads to Surge in Cybersecurity Incidents, Report Finds",
    excerpt:
      "A new study reveals that companies with remote workforces have experienced a 300% increase in certain types of cyberattacks since 2020.",
    content: `<p>A comprehensive new report has found that companies with predominantly remote workforces have experienced a 300% increase in certain types of cyberattacks since 2020, highlighting the security challenges of distributed work environments.</p>
    
    <p>The study, conducted by CyberShield Research, analyzed data from over 500 companies across various industries and found that phishing attacks, VPN exploits, and unsecured home network vulnerabilities were the primary vectors for successful breaches in remote work settings.</p>
    
    <p>"The attack surface has expanded dramatically with remote work," explained Alex Chen, lead researcher for the report. "Instead of securing one corporate network, security teams now effectively need to secure hundreds or thousands of home networks, personal devices, and public WiFi connections."</p>
    
    <p>Particularly concerning was the finding that 62% of successful attacks involved credentials stolen through phishing, with attackers increasingly targeting personal email accounts and devices that may have weaker security than corporate systems but are used to access work resources.</p>
    
    <p>The report also found that companies that implemented comprehensive security training programs and zero-trust architecture experienced significantly fewer successful attacks, with breach rates 76% lower than those without such measures.</p>
    
    <p>"Zero-trust approaches, which verify every user and device attempting to access resources regardless of location, have proven particularly effective in remote work environments," Chen noted.</p>
    
    <p>The researchers recommend that companies with remote workforces implement multi-factor authentication for all accounts, provide secure VPN connections, conduct regular security training with simulated phishing tests, and consider providing stipends for employees to upgrade home network security.</p>`,
    summary:
      "A study by CyberShield Research found companies with remote workforces have experienced a 300% increase in cyberattacks since 2020, with phishing attacks, VPN exploits, and unsecured home networks being the primary vulnerabilities. Companies implementing comprehensive security training and zero-trust architecture had 76% fewer breaches, highlighting the importance of multi-factor authentication and secure VPN connections for remote work.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Cybersecurity",
    date: "November 22, 2023",
    bookmarked: true,
  },
  {
    id: "8",
    title: "Renewable Energy Surpasses Coal for First Time in U.S. Electricity Generation",
    excerpt:
      "Solar, wind, and hydroelectric power generated more electricity than coal in the United States last year, marking a historic energy transition.",
    content: `<p>In a historic milestone for the U.S. energy sector, renewable sources including solar, wind, and hydroelectric power generated more electricity than coal in 2023, according to data released by the U.S. Energy Information Administration (EIA).</p>
    
    <p>Renewables produced approximately 23% of U.S. electricity last year, compared to coal's 20%, marking the first time clean energy has surpassed coal in the nation's power mix. Natural gas remained the largest source at 39%, with nuclear power providing about 18%.</p>
    
    <p>"This crossover point has been anticipated for years, but it arrived faster than most models predicted," said Dr. Sarah Martinez, an energy economist at the National Renewable Energy Laboratory. "A decade ago, most forecasts didn't see this happening until the 2030s."</p>
    
    <p>The shift has been driven by several factors, including the plummeting costs of solar and wind technology, state and federal clean energy policies, corporate sustainability commitments, and the economic challenges facing the coal industry.</p>
    
    <p>Solar energy saw the most dramatic growth, with generation increasing by 25% in a single year, while wind power grew by 11%. Together, these two sources now provide more electricity than all U.S. hydroelectric dams combined.</p>
    
    <p>The trend is expected to accelerate in coming years as more renewable projects come online and additional coal plants are retired. The EIA projects that by 2025, renewables could provide close to 30% of U.S. electricity.</p>
    
    <p>While the milestone represents significant progress in reducing the carbon intensity of the U.S. power sector, experts note that deeper decarbonization will require continued renewable deployment along with advances in energy storage, transmission infrastructure, and possibly next-generation nuclear power.</p>`,
    summary:
      "Renewable energy sources generated 23% of U.S. electricity in 2023, surpassing coal (20%) for the first time in history. This milestone, driven by plummeting costs of solar and wind technology along with supportive policies, arrived years earlier than most forecasts predicted. Solar energy saw the most dramatic growth at 25% in a single year, and renewables are projected to provide nearly 30% of U.S. electricity by 2025.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Energy",
    date: "January 15, 2024",
  },
  {
    id: "9",
    title: "Major Breakthrough in Nuclear Fusion Energy Announced",
    excerpt:
      "Scientists have achieved a sustained fusion reaction that produced more energy than was required to initiate it, a crucial milestone for fusion power.",
    content: `<p>Scientists at the National Ignition Facility (NIF) have announced a major breakthrough in nuclear fusion research, achieving a sustained fusion reaction that produced significantly more energy than was required to initiate it—a milestone known as fusion ignition with net energy gain.</p>
    
    <p>The experiment, conducted last month, used 192 high-powered lasers to heat and compress a tiny capsule of deuterium and tritium fuel to temperatures exceeding 100 million degrees Celsius and pressures greater than those found at the center of the sun. This extreme environment caused the hydrogen atoms to fuse together, releasing an enormous amount of energy.</p>
    
    <p>"This is the first time we've seen fusion ignition with significant energy gain in a laboratory setting," said Dr. Eliza Washington, director of the NIF. "The reaction produced 3.5 megajoules of energy from an input of about 2.1 megajoules—a gain factor of 1.7."</p>
    
    <p>While previous experiments had achieved brief moments of net energy gain, this latest breakthrough maintained the reaction for nearly 5 seconds, a crucial advancement for practical fusion energy.</p>
    
    <p>Nuclear fusion—the same process that powers the sun—has been pursued for decades as a potential source of clean, abundant energy. Unlike nuclear fission, which powers current nuclear plants by splitting atoms and produces long-lived radioactive waste, fusion combines light atoms and produces primarily helium as a byproduct.</p>
    
    <p>Despite the breakthrough, experts caution that commercial fusion power plants remain at least 15-20 years away. Significant engineering challenges must be overcome to scale the technology, capture the energy efficiently, and operate fusion reactors continuously rather than in brief pulses.</p>
    
    <p>"This is analogous to the Wright brothers' first flight," explained Dr. Washington. "It proves the fundamental concept works, but there's still a long road to commercial air travel—or in this case, commercial fusion power."</p>`,
    summary:
      "Scientists at the National Ignition Facility achieved a sustained nuclear fusion reaction producing 3.5 megajoules of energy from 2.1 megajoules input—a gain factor of 1.7. The reaction was maintained for nearly 5 seconds, a significant improvement over previous brief moments of net energy gain. While this proves the fundamental concept works, experts caution that commercial fusion power plants remain 15-20 years away due to remaining engineering challenges.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Science",
    date: "February 8, 2024",
    bookmarked: true,
  },
  {
    id: "10",
    title: "New Satellite Network to Provide Global High-Speed Internet Coverage",
    excerpt:
      "A constellation of 500 low-Earth orbit satellites will deliver high-speed internet to remote regions previously without reliable connectivity.",
    content: `<p>A new constellation of 500 low-Earth orbit (LEO) satellites is set to provide high-speed internet access to remote and underserved regions around the globe, potentially connecting billions of people to the digital economy for the first time.</p>
    
    <p>The network, called GlobalLink, is being deployed by aerospace company Stellar Communications, which successfully launched the first batch of 60 satellites last week. The company plans to have the full constellation operational by mid-2025.</p>
    
    <p>"Traditional internet infrastructure—fiber optic cables, cell towers, and so on—is extremely expensive to deploy in remote or difficult terrain," explained Maria Gonzalez, CEO of Stellar Communications. "Our satellite network can provide high-speed connectivity to any location on Earth without the need for ground infrastructure beyond a small receiver dish."</p>
    
    <p>The LEO satellites orbit at approximately 550 kilometers above Earth, much closer than traditional communication satellites in geostationary orbit at 36,000 kilometers. This lower altitude significantly reduces latency—the delay in data transmission—making the service suitable for applications like video conferencing and online gaming that require real-time interaction.</p>
    
    <p>Initial tests have demonstrated download speeds of 150-200 Mbps and latency of approximately 20 milliseconds, comparable to many urban broadband connections. The service is expected to be particularly transformative for remote educational institutions, healthcare facilities, and businesses in regions where reliable internet has been unavailable.</p>
    
    <p>The company has partnered with several non-profit organizations and governments to subsidize access in low-income regions, with a stated goal of connecting 50 million people currently without internet access by 2026.</p>
    
    <p>While several companies have pursued similar satellite internet projects, analysts note that GlobalLink's use of inter-satellite laser links—allowing data to be transmitted between satellites without returning to Earth—gives it a technical advantage in terms of speed and global coverage.</p>`,
    summary:
      "Stellar Communications is deploying GlobalLink, a constellation of 500 low-Earth orbit satellites that will provide high-speed internet to remote regions globally. The network, which will be fully operational by mid-2025, offers download speeds of 150-200 Mbps with low latency (20ms). The company has partnered with non-profits and governments to subsidize access in low-income regions, aiming to connect 50 million people currently without internet access by 2026.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Technology",
    date: "March 3, 2024",
  },
  {
    id: "11",
    title: "Revolutionary Blood Test Can Detect Multiple Cancers at Early Stages",
    excerpt:
      "A new liquid biopsy test can identify over 50 types of cancer from a simple blood draw, often before symptoms appear.",
    content: `<p>A revolutionary new blood test capable of detecting more than 50 types of cancer—often at early, more treatable stages—has been approved for clinical use following successful large-scale trials.</p>
    
    <p>The test, called OmniScreen, works by identifying tiny fragments of DNA shed by tumor cells into the bloodstream, known as cell-free DNA (cfDNA). Advanced machine learning algorithms then analyze specific patterns of methylation—chemical modifications to the DNA—to determine if cancer is present and identify its origin in the body.</p>
    
    <p>"This represents a paradigm shift in cancer screening," said Dr. James Chen, oncologist and principal investigator for the clinical trials. "Currently, we only have routine screening tests for a handful of cancers—breast, colorectal, cervical, and in some cases, lung and prostate. This single blood test can screen for dozens of cancer types, many of which currently have no screening options."</p>
    
    <p>In clinical trials involving over 15,000 participants, the test demonstrated an impressive 99.3% specificity, meaning a very low false-positive rate. Sensitivity—the ability to correctly identify cancer when it is present—varied by cancer type and stage, but averaged 76% for stage II cancers across all types, when treatments are typically more effective than at later stages.</p>
    
    <p>Particularly notable was the test's ability to detect pancreatic, ovarian, and liver cancers—diseases that are often diagnosed too late for effective treatment—with sensitivity rates above 70% at stage II.</p>
    
    <p>Health authorities have approved the test for individuals at elevated cancer risk, including those over 50 years old and people with significant family history of cancer. Insurance coverage is expected to be determined over the coming months.</p>
    
    <p>While the test represents a major advance, doctors emphasize it should complement rather than replace existing screening methods like mammograms and colonoscopies, which remain more sensitive for their specific cancer types.</p>`,
    summary:
      "A revolutionary blood test called OmniScreen can detect over 50 types of cancer by identifying DNA fragments from tumor cells and analyzing methylation patterns. The test showed 99.3% specificity in clinical trials with 15,000 participants and 76% sensitivity for stage II cancers. It's particularly valuable for detecting pancreatic, ovarian, and liver cancers at earlier stages, and has been approved for individuals over 50 or with significant family history of cancer.",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Health",
    date: "April 12, 2024",
  },
  {
    id: "12",
    title: "Virtual Reality Therapy Shows Promise for Treatment-Resistant Depression",
    excerpt:
      "Clinical trials reveal that immersive VR therapy combined with traditional approaches significantly improves outcomes for patients who haven't responded to conventional treatments.",
    content: `<p>A groundbreaking clinical trial has found that virtual reality (VR) therapy, when combined with traditional treatment approaches, significantly improves outcomes for patients with treatment-resistant depression—a condition affecting millions who don't respond adequately to standard interventions.</p>
    
    <p>The study, conducted across 15 medical centers, involved 284 patients whose depression had not responded to at least two different antidepressant medications. Half received standard care, while the other half participated in twice-weekly VR therapy sessions in addition to their usual treatment.</p>
    
    <p>The VR therapy, developed by neuroscientists and psychologists, uses immersive environments to help patients practice emotional regulation, mindfulness, and social interaction skills in controlled, gradually challenging scenarios.</p>
    
    <p>"What makes this approach unique is that it creates emotionally resonant experiences that engage different neural pathways than talk therapy alone," explained Dr. Sophia Kim, the study's lead author. "Patients can practice coping skills in situations that feel real but are completely safe and can be carefully calibrated to their therapeutic needs."</p>
    
    <p>After 12 weeks, 68% of patients in the VR group showed a clinically significant reduction in depression symptoms, compared to 38% in the control group. Moreover, 35% of VR participants achieved remission—meaning their symptoms decreased to minimal or none—versus 17% in the standard care group.</p>
    
    <p>Participants reported that the immersive nature of VR helped them engage more deeply with therapeutic concepts they had previously understood intellectually but struggled to implement. The technology also appeared to increase treatment adherence, with VR participants completing 94% of scheduled sessions compared to 75% for conventional therapy appointments.</p>
    
    <p>Based on these results, several insurance companies have announced they will begin covering VR therapy for treatment-resistant depression, and researchers are now exploring applications for anxiety disorders, PTSD, and phobias.</p>`,
    summary:
      "A clinical trial across 15 medical centers found that virtual reality therapy significantly improves outcomes for treatment-resistant depression when combined with standard care. After 12 weeks, 68% of patients in the VR group showed significant symptom reduction (vs. 38% in the control group), and 35% achieved remission (vs. 17%). The immersive nature of VR helps patients engage more deeply with therapeutic concepts and improves treatment adherence to 94% (vs. 75% for conventional therapy).",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Health",
    date: "May 5, 2024",
  },
]

export function getNews(): News[] {
  return newsData
}

export function getNewsById(id: string): News | undefined {
  return newsData.find((news) => news.id === id)
}




// import '@/lib/db'
// import Newss from "@/lib/schema/News"; 

// export async function getNews() {
//   try {
//     const news = await Newss.find({}, "_id title summary publishedAt imageUrl url categories");
//     return news;
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     return [];                                                                                                                                                                              
//   }                                                                                                              
// }                                                                   

// export async function getNewsById(id: string) {
//   try {
//     const news = await Newss.findById(id);
//     return news;
//   } catch (error) {
//     console.error("Error fetching news by ID:", error);
//     return null;
//   }
// }