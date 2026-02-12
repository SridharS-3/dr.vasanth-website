export interface Treatment {
  id: string;
  title: string;
  image: string;
  image2: string;
  introduction: string;
  description?: string;
  candidates?: string;
  benefits?: string[];
  procedure?: string[];
}

export const treatmentData: Treatment[] = [
  {
    id: 'oral-medicine-pathology',
    title: 'Oral Medicine and Pathology',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    image2: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
    introduction: 'Oral Medicine Diagnosis pathology & Radiology is the specialty that focuses on the diagnosis and medical management of diseases of the Head and Neck. It is a unique field of dentistry that combines both Oral Medicine and Craniofacial Radiology.',
    description: 'The Department emphasizes the responsibility of the dentist to see problems affecting the oral region in the context of overall health status. Oral pathology and oral medicine is concerned with the health of the mouth and the diagnosis and management of diseases of the oral region.',
    candidates: 'Oral Medicine and Pathology is focuses on the diagnosis and treatment of oral diseases, including oral cancer, infections, autoimmune disorders, and other oral conditions. Patients with oral ulcers, reduced mouth opening, oral swellings, oral stiffness, white and red lesions on the mouth are the candidates for treatment.',
    procedure: [
      'Medical History and Examination: The first step involves taking a detailed medical history and conducting a thorough oral examination. This includes assessing the patient\'s general health, previous medical conditions, and any medications they are taking.',
      'Diagnostic Tests: Depending on the symptoms and findings from the examination, the oral medicine specialist may order specific diagnostic tests such as biopsies, imaging studies (X-rays, CT scans), or blood tests to aid in the diagnosis.',
      'Diagnosis: Based on the patient\'s medical history, clinical examination, and diagnostic test results, a definitive diagnosis is made. This is crucial for determining the appropriate treatment plan.',
      'Treatment Planning: The oral medicine specialist devises a treatment plan tailored to the patient\'s condition. This may involve managing systemic conditions that affect the oral cavity or addressing specific oral diseases.',
      'Non-surgical Management: In many cases, oral medicine treatment involves non-surgical management, such as prescribing medications, mouthwashes, or topical agents to alleviate symptoms or control oral diseases.',
      'Patient Education: The specialist educates the patient about their condition, the treatment plan, and preventive measures they can take to maintain oral health.',
      'Follow-up and Monitoring: Regular follow-up appointments are scheduled to assess the patient\'s response to treatment and make any necessary adjustments.',
      'Referral: If the oral medicine specialist identifies conditions that require more specialized care or surgical intervention, they may refer the patient to an appropriate specialist, such as an oral surgeon or periodontist.',
      'Oral Cancer Screening: Routine oral cancer screenings are often conducted, especially for patients at higher risk, to detect any signs of oral cancer early on.',
      'Oral Health Maintenance: After treatment, patients are encouraged to maintain good oral hygiene practices and regular dental check-ups to prevent future oral health issues.'
    ],
    benefits: [
      'Comprehensive Diagnosis: Oral Medicine and Pathology specialists are trained to provide a thorough and accurate diagnosis of oral diseases and conditions.',
      'Multidisciplinary Approach: Practitioners often collaborate with other dental and medical specialists, ensuring well-rounded care and appropriate treatment plans.',
      'Management of Oral Lesions: Experts are skilled in managing a wide range of oral lesions, including oral ulcers, mucosal diseases, and potentially malignant disorders.',
      'Oral Cancer Detection: Early detection is crucial for successful treatment. Specialists can perform thorough oral cancer screenings leading to early detection and improved outcomes.',
      'Patient Education: Practitioners play an essential role in educating patients about oral health, disease prevention, and self-examination techniques.',
      'Research and Advancements: The field actively contributes to scientific research and advancements in oral healthcare, leading to improved diagnostic techniques and treatment modalities.'
    ]
  },
  {
    id: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'Restorative dentistry is a branch of dentistry that focuses on restoring the function, appearance, and integrity of teeth and oral structures affected by various dental conditions or injuries. It involves the diagnosis, prevention, and treatment of oral diseases and disorders, with the goal of improving oral health and enhancing the patient\'s quality of life.',
    description: 'Restorative dentistry focused on restoring the function and appearance of damaged or missing teeth. It involves various treatments and procedures to repair teeth affected by decay, trauma, wear, or other dental issues. Restorative dentistry aims to improve oral health, restore natural tooth structure, and enhance the overall aesthetics of the smile. Common restorative procedures include dental fillings, veneers, crowns.',
    candidates: 'Patients with dental caries, tooth pain, tooth sensitivity, fractured tooth/restoration are the candidates for restorative dentistry.',
    procedure: [
      'Examination and Diagnosis: The dentist examines the patient\'s teeth and oral health to assess the extent of damage or decay. X-rays and other diagnostic tools may be used to aid in the assessment.',
      'Treatment Planning: Based on the examination, the dentist develops a treatment plan that outlines the specific restorative procedures required to address the dental issues.',
      'Tooth Preparation: If necessary, the damaged or decayed part of the tooth is removed, creating a clean surface for the restoration.',
      'Restoration Placement: The chosen restorative material (e.g., dental fillings, crowns, bridges) is applied to the prepared tooth structure to restore its function and appearance.',
      'Bite Adjustment: The dentist ensures that the restoration fits correctly with the patient\'s bite and makes any necessary adjustments for comfort and functionality.',
      'Final Polishing: The restoration is polished to achieve a smooth and natural appearance, blending in with the surrounding teeth.',
      'Follow-Up: After the restorative treatment, the dentist may schedule follow-up appointments to monitor the success of the restoration and address any concerns or issues that may arise.'
    ],
    benefits: [
      'Improved oral function: Restorative dentistry procedures such as dental fillings, crowns, and bridges help restore damaged or missing teeth, improving chewing and speaking abilities.',
      'Preservation of natural teeth: Restorative procedures aim to preserve as much of the natural tooth structure as possible, preventing the need for tooth extraction.',
      'Pain relief: Restoring decayed or damaged teeth can alleviate tooth pain and sensitivity, improving overall oral comfort.',
      'Long-term durability: Modern restorative materials, such as ceramic and composite resins, are durable and can last for many years with proper care.',
      'Preventing further dental problems: Restorative dentistry addresses dental issues promptly, preventing them from escalating into more complex and expensive problems later on.',
      'Restoring bite alignment: Restorative treatments can help correct bite issues and improve the alignment of teeth, contributing to better overall oral health.',
      'Customized solutions: Restorative dentistry offers personalized treatments tailored to each patient\'s specific needs, ensuring optimal results.'
    ]
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'Endodontics is a branch of dentistry that deals with the diagnosis, prevention, and treatment of diseases and injuries that affect the dental pulp and the surrounding tissues of the tooth.',
    description: 'Endodontics focuses on the diagnosis and treatment of diseases and disorders related to the dental pulp and surrounding tissues. It involves procedures such as root canal therapy, which is the removal of infected or damaged pulp from inside the tooth, and subsequent cleaning, shaping, and filling of the root canal system. The goal of endodontic treatment is to save natural teeth and alleviate pain or discomfort caused by dental pulp infections or injuries.',
    candidates: 'The candidates for endodontic treatment, also known as root canal treatment, are individuals who have problems with the innermost layer of their teeth called the dental pulp. These problems can include severe tooth decay, tooth infections, tooth trauma, or irreversible damage to the pulp. Endodontic treatment is typically recommended for individuals experiencing tooth pain, sensitivity to hot and cold, swelling around the tooth, or abscess formation.',
    procedure: [
      'Initial examination: The dentist examines the tooth and takes X-rays to assess the condition of the tooth and surrounding structures.',
      'Anesthesia: Local anesthesia is administered to numb the area around the tooth, ensuring a painless procedure.',
      'Isolation: A rubber dam is placed around the tooth to keep it clean and dry during the procedure.',
      'Access opening: The dentist creates an opening in the tooth to gain access to the pulp chamber and root canals.',
      'Pulp removal: The infected or damaged pulp tissue is carefully removed from the pulp chamber and root canals using specialized instruments.',
      'Cleaning and shaping: The dentist uses small files to clean and shape the root canals, removing any remaining infected tissue and preparing them for filling.',
      'Irrigation: The root canals are flushed with a disinfecting solution to remove debris and disinfect the area.',
      'Obturation: The cleaned and shaped root canals are filled with a biocompatible material called gutta-percha and a dental sealer to seal the canals and prevent re-infection.',
      'Final restoration: After the root canal treatment, the access opening in the tooth is filled and sealed with a temporary or permanent filling. In some cases, a dental crown may be necessary to protect and strengthen the treated tooth.',
      'Follow-up: The patient is typically advised to schedule a follow-up appointment to monitor the healing process and ensure the success of the treatment.'
    ],
    benefits: [
      'Tooth preservation: Endodontic treatment aims to save the natural tooth by removing infected or damaged pulp tissue, cleaning the root canals, and sealing them. This helps to preserve the tooth\'s functionality and appearance.',
      'Pain relief: Endodontic procedures are performed to alleviate toothache caused by pulp inflammation or infection. By removing the source of pain and treating the underlying issue, endodontics can provide significant pain relief.',
      'Improved oral health: By saving the natural tooth, endodontics helps to maintain proper dental function, such as chewing and speaking, and preserves the alignment and balance of neighboring teeth.',
      'Aesthetics: Endodontic treatment preserves the natural appearance of the tooth, ensuring a harmonious smile. This is especially important for teeth in visible areas of the mouth.',
      'Cost-effective: Compared to tooth extraction followed by prosthetic replacements like dental implants or bridges, endodontic treatment is often a more cost-effective option.',
      'Long-term solution: With proper care, endodontically treated teeth can last a lifetime. By maintaining good oral hygiene practices and regular dental check-ups, patients can enjoy the benefits of their treated tooth for an extended period.'
    ]
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'Periodontics is a specialized field of dentistry that focuses on the prevention, diagnosis, and treatment of diseases that affect the gums and supporting structures of the teeth.',
    description: 'A periodontist treats oral health issues that affect your periodontium (the tissues around your teeth). This includes your gingiva (gums), periodontal ligament (connective tissue fibers that attach your teeth to your jawbone), cementum (hard layer of calcified tissue that covers your teeth roots), and alveolar bone (the part of your jawbone that has tooth sockets).',
    candidates: 'There are several reasons why someone would need to see a periodontist. Some people may need to undergo treatment that\'s outside the scope of practice for a general dentist. For example, maybe you need a gum graft, bone graft or frenectomy. A periodontist can perform your surgical treatment, then refer you back to your general dentist when your recovery is complete.',
    procedure: [
      'Scaling: Scaling removes tartar and bacteria from your tooth surfaces and below your gumline. It may be done using instruments, a laser or an ultrasonic device.',
      'Root planing: Root planing smooths the root surfaces. This helps prevent further buildup of tartar and bacteria. It also helps your gums attach to your teeth again.',
      'Antibiotics: Topical or oral antibiotics can help control bacterial infection. Topical antibiotics can include antibiotic mouth rinses or putting gel containing an antibiotic into gum pockets.',
      'Flap surgery (pocket reduction surgery): Your periodontist makes cuts in your gums to carefully fold back the tissue. This exposes the tooth roots for more effective scaling and root planing.',
      'Soft tissue grafts: When you lose gum tissue, your gumline gets lower, exposing some of your tooth roots. A small amount of tissue from the roof of your mouth or another donor source is attached to the affected site.',
      'Bone grafting: This procedure is performed when periodontitis destroys the bone around your tooth root. The graft may be made from small bits of your own bone, or the bone may be made of artificial material or donated.',
      'Guided tissue regeneration: This allows the regrowth of bone that was destroyed by bacteria. Your dentist places a special type of fabric between existing bone and your tooth to allow bone to grow back.',
      'Tissue-stimulating proteins: This involves applying a special gel to a diseased tooth root. This gel contains the same proteins found in developing tooth enamel and stimulates the growth of healthy bone and tissue.'
    ],
    benefits: [
      'A healthy, beautiful smile: Your gums play an imperative role in the health and appearance of your teeth.',
      'Fresher breath: A common symptom of periodontal disease is halitosis, or bad breath, due to the plaque and bacteria that can build up along inadequately cared for gum lines.',
      'Removing tartar: Tartar is a hard deposit that can build up above and below your gum lines when they aren\'t properly cared for and if not treated can lead to serious gum disease.',
      'Early detection: A visit with your trusted provider of periodontal therapy can help determine if you have other oral health issues, and if caught early will likely require less serious treatment.',
      'Prevents tooth loss: Periodontal treatment helps maintain the supporting structures of teeth, preventing tooth loss.',
      'Improves overall health: Treating gum disease can reduce inflammation and improve overall health, as periodontal disease is linked to various systemic conditions.'
    ]
  },
  {
    id: 'oral-maxillofacial-surgery',
    title: 'Oral and Maxillofacial Surgery',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'This is a branch of dentistry which deals with diagnosing and surgically treating injuries, diseases, defects of jaws, mouth, face etc. This also includes dental implants, removing decayed teeth, biopsy and taking of cysts as well as tumours of jaw and mouth, treating facial trauma and jaw reconstruction.',
    candidates: 'Patients requiring wisdom teeth removal, corrective jaw surgery, facial injury repair, complex extractions, dental implants, treatment of maxillofacial infections, or correction of facial and oral deformities are candidates for oral and maxillofacial surgery.',
    procedure: [
      'Extraction of decayed tooth, surgical extraction of roots and removal of impacted wisdom tooth.',
      'Placement of dental implants which replaces single/several teeth as well as entire teeth in the mouth. Dental implants are very comfortable and last for a long time than the conventional dentures.',
      'Reconstructive surgery which addresses injuries in lower, upper jaws of the soft and hard tissues which are the result of trauma, accident, long time of wearing dentures, tumor surgery.',
      'Treatment of maxillofacial infections. Such infections are diagnosed and then treated as they are very dangerous and can cause severe emergencies if not treated properly, timely and effectively.',
      'Surgeries to correct facial and oral deformities due to difference in the skeletal growth between lower and upper jaws, congenital disorders (such as palate, cleft lip) which is the result of improper growth of oral nasal cavity at the time of fetal development.',
      'Treating injuries to face, teeth, mouth, jaws caused because of trauma. Surgeons are expert to treat trauma which also includes upper and lower fractures of the jaws and orbit.'
    ],
    benefits: [
      'Improved oral health: OMFS can treat a range of oral issues such as impacted teeth, jaw misalignment, and gum disease. By addressing these issues, patients can enjoy better oral health and a reduced risk of future problems.',
      'Improved overall health: OMFS can help treat conditions that may affect other parts of the body.',
      'Enhanced appearance: OMFS can also improve the appearance of the face and jaw, leading to increased confidence and self-esteem.',
      'Increased self-esteem: In addition to the benefits already mentioned, OMFS can help with issues such as facial trauma and reconstructive surgery, further improving self-esteem.',
      'Improved ability to speak and eat comfortably: By addressing functional concerns, patients can enjoy better quality of life.',
      'Relief from chronic pain or discomfort: OMFS offers a comprehensive approach to improving oral and overall health by addressing both functional and aesthetic concerns.'
    ]
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'Prosthodontics is a specialized branch of dentistry dedicated to making dental prosthetics (artificial teeth) for damaged or missing teeth.',
    description: 'Unlike general dentists, prosthodontists specialize in repairing natural teeth and replacing missing teeth. Missing and extracted (removed) teeth are replaced with artificial teeth (dentures), dental implants, caps, or crowns. Specially trained prosthodontists also work with people with head and neck deformities, replacing missing parts of the jaw and face.',
    candidates: 'Prosthodontics can treat a wide range of issues. Your general dentist might refer you to a prosthodontist if you have missing teeth, severely damaged teeth, TMJ pain or dysfunction, mouth or facial pain, cosmetic concerns, or obstructive sleep apnea.',
    procedure: [
      'Dentures: Prosthodontists are skilled in creating complete dentures for patients who have lost all their teeth. These dentures are custom-made to fit the patient\'s mouth and restore their ability to eat, speak, and smile.',
      'Dental Implants: Prosthodontists are involved in the surgical placement and restoration of dental implants. Implants are artificial tooth roots that are surgically inserted into the jawbone to support dental crowns, bridges, or dentures.',
      'Dental Crowns and Bridges: Prosthodontists design and fabricate dental crowns, which are tooth-shaped caps placed over damaged or decayed teeth to restore their strength, shape, and appearance. They also create dental bridges to replace missing teeth.',
      'Veneers: Prosthodontists can apply veneers, which are thin shells made of porcelain or composite resin, to the front surfaces of teeth. Veneers improve the appearance of stained, chipped, or misaligned teeth.',
      'Temporomandibular Joint (TMJ) Disorders: Prosthodontists diagnose and treat conditions affecting the temporomandibular joint, which connects the jawbone to the skull. They may provide oral appliances or prosthetic solutions to alleviate symptoms.'
    ],
    benefits: [
      'Improved aesthetics: Prosthodontic treatments can greatly enhance the appearance of a patient\'s smile. Whether it\'s dental crowns, bridges, dentures, or dental implants, prosthodontic solutions are designed to closely resemble natural teeth.',
      'Restored oral function: Missing or damaged teeth can significantly impact a person\'s ability to chew, speak, and bite properly. Prosthodontic treatments restore oral function by replacing missing teeth or correcting dental abnormalities.',
      'Enhanced comfort: Prosthodontic appliances are customized to fit the individual patient\'s mouth, ensuring optimal comfort and a secure fit. Dentures, bridges, and implants are made to feel as natural as possible.',
      'Preservation of oral health: Prosthodontics not only replaces missing teeth but can also help preserve the overall health of the mouth. By filling gaps left by missing teeth, prosthodontic treatments prevent neighboring teeth from shifting.',
      'Maintains proper jaw alignment: Prosthodontic treatments help maintain proper jaw alignment and minimize the risk of dental complications that may arise due to tooth loss.',
      'Boosts confidence: With restored teeth and improved smile aesthetics, patients can eat, speak, and smile with confidence.'
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    image2: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
    introduction: 'It is a specialized branch of dentistry that focuses on prevention as well as treatment of mal-alignment of teeth and facial irregularities/abnormalities. Normally the irregularity of the teeth is corrected by putting braces.',
    description: 'There are 3 types of braces available: metallic (conventional and most commonly used), ceramic (very popular with adults as they look good and match with the teeth color), and invisalign (invisible and can be removed, very comfortable as there is no use of metal brackets and wires). On an average 12 to 22 months is required but the time depends on individual need and problem.',
    candidates: 'One who has got misaligned teeth, crowded teeth, buck teeth, overlapping of teeth and gap between the teeth are the candidates of orthodontic treatment. There is misalignment of teeth because of thumb sucking, small jaw, incompetent lips, bad tongue and lip habits, nail biting, injury etc. According to experts a child at the age of 7 should be brought to an orthodontist because this is the time when the new teeth erupt. Adults can also go for this treatment as there is no age bar for putting on braces.',
    procedure: [
      'Record Making: Firstly a record is made before the treatment starts, which serves as a tool for the orthodontist. This includes medical history, plaster models of the teeth are studied, clinical examination, photos of teeth as well as x-rays of head and mouth.',
      'Treatment Planning: Second step is to plan the treatment. This varies according to individual patients requirement.',
      'Active Phase: Then appliances which are to be used are put in place, this is an active phase. These appliances are periodically adjusted just to make sure that the teeth are moving in right direction.',
      'Retention Phase: Third is the retention phase in which the patient is required to wear a retainer so that teeth retain their new place/position.'
    ],
    benefits: [
      'Transforms facial structure: Orthodontics can change the teeth as well as the whole facial structure. By aligning teeth one gets the correct functioning of the jaw and an attractive smile.',
      'Easier teeth cleaning: Teeth can be cleaned easily and the chances of gum diseases are reduced.',
      'Enhanced self-confidence: Orthodontic treatment enhances the self confidence of an individual.',
      'No age barrier: There is no age bar for putting on braces. In fact mostly the adults go for it because they want to look good and confident.',
      'Multiple options available: Three types of braces are available - metallic, ceramic, and invisalign - to suit different preferences and needs.',
      'Early intervention possible: A child at the age of 7 should be brought to an orthodontist. This is referred to as phase I treatment for 12-21 months. Then in phase II when the child turns 12-13 full braces can be put if the teeth are still not in the right shape.',
      'Reasonable treatment time: On an average 12 to 22 months is required but the time depends on individual need and problem.'
    ]
  },
  {
    id: 'implant-dentistry',
    title: 'Implant Dentistry',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'A dental implant is man-made replacement in place of the natural teeth which enables a person to have fixed teeth. Dental implants are different from transplants taken from others. What category of dental implant is suitable for a patient depends on the individual need and condition of the teeth. An x-ray is required to check the amount of bones remaining; space available in the mouth. The dentist does an examination before finalizing which type of implant should be done.',
    description: 'Losing a tooth (or teeth) can be a shattering experience — emotionally and professionally. Aside from the obvious problems of poor physical appearance and damaged self-esteem, missing teeth also cause subsequent dilemmas like loss of chewing ability or ineffective speech. Dental implants are uniquely stable, eliminating the need for removable or partial dentures. They can also serve as an anchor for other dental prostheses like crowns, bridges and dentures. With dental implants, you will be able to eat, speak, smile and laugh confidently.',
    candidates: 'People who are missing teeth may it be one or all are candidates for an implant. If a person is missing 1 or few teeth then dental implants along with a crown/bridge can be used to replace the missing teeth and these manmade teeth function as good as natural teeth and there is no further loss of bones and decay. If a person is missing all teeth then implant is used to anchor loose denture. In some cases when bones are lost; bones can be regenerated with the technique of bone expansion which further helps in implants.',
    procedure: [
      'Initial consultation and treatment planning: The dentist does an examination and takes X-rays to check the amount of bones remaining and space available in the mouth before finalizing which type of implant should be done.',
      'Implant placement surgery: The titanium implant (which is biocompatible with body tissues) is surgically placed into the jawbone to serve as an artificial tooth root.',
      'Healing period (3-6 months): The implant integrates with the jawbone through a process called osseointegration, creating a stable foundation.',
      'Abutment placement: Once healing is complete, an abutment (connector piece) is attached to the implant to hold the final restoration.',
      'Crown attachment: A custom-made crown, bridge, or denture is attached to the abutment, completing the restoration and providing a natural-looking tooth replacement.'
    ],
    benefits: [
      'Permanent solution: Dental implants are uniquely stable and provide a long-lasting tooth replacement solution.',
      'Natural appearance and function: Manmade teeth function as good as natural teeth, allowing you to eat, speak, smile and laugh confidently.',
      'Preserves bone: Prevents further loss of bones and decay. Without implants, bone loss makes the adjacent bones weak which causes falling of nearby teeth.',
      'No damage to adjacent teeth: Unlike bridges, implants don\'t require grinding down adjacent teeth for support.',
      'No rejection by body: The body can reject soft tissue transplants but there is no rejection to dental implant. Dental implants use titanium material that is biocompatible with body tissues.',
      'Prevents complications: Without dental implants, adjacent teeth become weak with no support for partials, dentures and bridges, resulting in pain, mobile gum tissues, sore spots, painful ridges, and lack of retention.',
      'Maintains diet and lifestyle: Prevents the need to survive on soft food only. Eliminates problems like tongue enlargement, numbness of lower lips, and risk of jaw fracture from bone loss.'
    ]
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    image: 'https://images.unsplash.com/photo-1629909615957-be38b9e8e4c4?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'Laser dentistry is an effective and precise way of performing various dental procedures. Laser dentistry has the potential to improve various dental procedures, but all depends on the personnel skill of the dentist i.e. his ability and skill to control the exposure of laser on the gum as well as the teeth surface, and control over power output. Special care is required as the laser should not damage the surrounding tissues.',
    description: 'The laser energy is absorbed by molecules of water present in the tissues. The laser energy causes an explosion because the water molecules expand which in turn moves apart the tissue particle. Laser dentistry helps to treat gum diseases by first targeting and then vaporizing the gum tissues. Laser dentistry is very much better than the traditional procedures that cut the tissues using scalpels. Laser is used to vaporize only diseased tissues which leave the tissues healthy and free of diseases.',
    candidates: 'Patients seeking less invasive treatment options for gum disease, cavity treatment, cosmetic procedures, root canal treatment, biopsy or lesion removal, and teeth whitening are ideal candidates for laser dentistry.',
    procedure: [
      'Gum disease treatment: Lasers are used to reshape gums and remove bacteria during root canal procedures.',
      'Biopsy or lesion removal: Lasers can be used to remove a small piece of tissue (called a biopsy) so that it can be examined for cancer. Lasers are also used to remove lesions in the mouth and relieve the pain of canker sores.',
      'Teeth whitening: Lasers are used to speed up in-office teeth whitening procedures. A peroxide bleaching solution, applied to the tooth surface, is "activated" by laser energy, which speeds up the whitening process.',
      'Root canal debridement: Lasers used in killing the bacteria present in the root canal during the RCT procedure.'
    ],
    benefits: [
      'Does not damage surrounding tissues: The laser can be precisely controlled to target only the affected area.',
      'Less pain: Some laser dentistry procedures are done without anesthesia, making treatment more comfortable.',
      'Minimal bleeding: High light beam results in clotting of blood which reduces blood loss. Laser automatically forms clots and seals the blood vessels as well as nerve endings.',
      'Reduced infection risk: Chances of bacterial infection are less because the area on which work is done is exposed to high light beam.',
      'No stitches required: The procedures which use soft tissues laser do not require stitches.',
      'Faster healing: Wounds heal up faster and there is regeneration of tissues.',
      'No recovery time: One can return back to work immediately after the treatment and there is no down time. Hence it is very convenient and comfortable for the patient.'
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    introduction: 'Pediatric dentistry specializes in/takes care of the oral health of infant, children and adolescent. This dentistry also treats children with special needs, who are physically and mentally challenged. This branch of dentistry studies child growth, psychology and development. Such dentists take care of wide variety of dental problems of children e.g. cavity, tooth decay, malocclusion, emergency care, crooked teeth etc.',
    description: 'Your child should see a dentist by their first birthday or when their first tooth appears, whichever comes first. According to American Academy of Pediatric Dentistry the child should be brought twice a year to the dental clinic. The visits may vary if the child has tooth decay, bad oral hygiene, and unusual teeth growth.',
    candidates: 'Children from infancy through adolescence requiring routine care, preventive treatments, or specialized pediatric procedures. This also includes children with special needs who are physically and mentally challenged.',
    procedure: [
      'First Dental Appointments: Your child should see a dentist by their first birthday or when their first tooth appears, whichever comes first. Our first dental appointments are quick, gentle, and designed to be a positive experience.',
      'Regular Exams & Cleanings: From young children to teenagers, we\'re there every step of the way. We encourage regular appointments and also teach brushing and flossing techniques for your child\'s sensitive teeth. We monitor teeth for alignment, decay, and other issues at every stage of development.',
      'Restorative Care: While we aim to prevent cavities and disease, we\'re ready to help fix problems as quickly and comfortably as possible. If your child loses a baby or adult tooth, we can take a look and provide guidance on whether a restoration is needed.',
      'Integrated & Custom Care: All kids are one-of-a-kind. We\'ll work with you to ensure they get the specialized care they need. We can consult with your child\'s pediatrician if needed or work with you to tackle challenges like stopping thumb-sucking.'
    ],
    benefits: [
      'Early problem detection: Regular visits help identify dental issues early when they are easier to treat.',
      'Preventive care: Focus on preventing cavities and disease through education and regular monitoring.',
      'Positive dental experience: First appointments are quick, gentle, and designed to be a positive experience for children.',
      'Healthy habits formation: We teach brushing and flossing techniques for your child\'s sensitive teeth, establishing good oral hygiene habits early.',
      'Importance of baby teeth: Baby teeth help the child to chew food, smile properly and speak clearly. They hold the space for permanent teeth.',
      'Prevents future problems: If child loses teeth at an early age because of decay/damage, nearby teeth can encroach that free space which can result in misplaced/crooked permanent teeth.',
      'Specialized care for all children: We treat children with special needs who are physically and mentally challenged, providing integrated and custom care.',
      'Proper cleaning guidance: For infants, a soft cloth should be used to clean gums after every feed. Once the child has one tooth, a soft toothbrush can be used. Toothpaste with fluoride is not recommended for children below 2 years.'
    ]
  }
];
