import React from 'react';
import { Typography, Box } from '@mui/material';

function Proposals() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
            overflow="auto"
            p={3} // Add padding to the Box
        >
            <Typography variant="h2" component="h1" align="center" mb={2}>
                Proposals
            </Typography>
            <Typography align="center" mb={3}>
                Below are some policy proposals that we have come up with based on the ethical dilemmas discussed in the course "INFO 351: Information Ethics and Policy".
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", margin: "10px 0", backgroundColor: "#efd1ad" }}
            >
                <Typography variant="h6" component="h2" align="left" mb={2}>
                    Ethical Tech Integration: A Comprehensive Policy Proposal
                </Typography>
                <Typography align="left" mb={2}>
                    In response to the rapid technological advancements reshaping our society, this policy proposal suggests proactive measures to regulate and guide the integration of emerging technologies. The first component advocates for the inclusion of a tech ethics quiz or culture fit questionnaire in the hiring processes of tech companies, both in the public and private sectors. This screening tool aims to align prospective employees with the company's values, mitigating risks associated with cutting-edge technologies. Furthermore, companies are encouraged to collaborate with HireVue to incorporate a tech ethics/culture fit questionnaire into their recruitment strategies.
                </Typography>
                <Typography align="left" mb={2}>
                    The second facet addresses the specific challenges posed by Generative AI, emphasizing the need for comprehensive policies at the city, state, and federal levels. Rather than adopting a blanket ban or unrestricted usage, this proposal suggests a controlled and responsible approach to harness the efficiency benefits while minimizing risks related to AI bias, privacy, and cybersecurity. Cities, such as the City of Seattle, are urged to involve registered users in Information Technology Department working groups to co-develop AI policies. Key guidelines for Generative AI usage include recognizing the potential for public records requests, safeguarding confidential information, and encouraging user participation in established workgroups for ongoing policy enhancement. Ultimately, this proposal aims to ensure ethical and responsible integration of technology into various sectors, fostering a collaborative and informed approach to address the evolving challenges of the digital era.
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", margin: "10px 0", backgroundColor: "#efd1ad" }}
            >
                <Typography variant="h6" component="h2" align="left" mb={2}>
                    Integrating Informational Ethics Education in High Schools
                </Typography>
                <Typography align="left" mb={2}>
                    In response to the dynamic landscape of information ethics, a crucial policy proposal is to mandate the inclusion of informational ethics and policies in the high school curriculum. This initiative aims to equip students with a comprehensive understanding of ethical considerations, providing a foundation for critical thinking and responsible decision-making in the face of evolving technological challenges.
                </Typography>
                
                <Typography align="left" mb={2}>
                    High school students will engage with diverse sources spanning historical periods, tracing the development of ethical norms and their societal impacts. Following this, students will apply their acquired ethical knowledge to contemporary issues, honing their ability to assess ethical and unethical aspects both independently and collaboratively. Teachers, pivotal in this process, undergo pre-hiring assessments to ensure proficiency in informational ethics, addressing gaps in their understanding. The resources presented by teachers emphasize crucial issues in the technological landscape, such as intellectual property, responsible technology use, privacy rights, and the impact of misinformation in social media.
                </Typography>

                <Typography align="left" mb={2}>
                    The education of high school students serves as a catalyst, producing a cohort well-versed in ethical considerations as they navigate the modern world. While students may interpret ethics subjectively, exposure to informational ethics encourages practical understanding and application in real-world scenarios. In their future endeavors, informed graduates can adeptly respond to ethical challenges in the workforce and social media, safeguarding themselves and their communities. Moreover, these students become advocates, sharing insights with peers and parents, creating a ripple effect that perpetuates ethical awareness and application across generations. This proposal envisions a continuous cycle of knowledge dissemination, fostering a society equipped to address the ever-evolving ethical landscape.
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", margin: "10px 0", backgroundColor: "#efd1ad" }}
            >
                <Typography variant="h6" component="h2" align="left" mb={2}>
                    Enhancing Competence in U.S. Officials
                </Typography>
                <Typography align="left" mb={2}>
                    In an era defined by rapid technological advancement, it is evident that U.S. government officials must bridge the competence gap in understanding AI and modern technologies. The impact of their decisions reverberates through society, necessitating a proactive approach to equip officials with the knowledge and expertise required to navigate the intricate intersection of technology and governance.
                </Typography>
                
                <Typography align="left" mb={2}>
                    This policy proposal advocates for a comprehensive training program designed to enhance the technological competence of government officials. The program will cover the fundamental principles of AI, its applications, and the broader implications of emerging technologies on society. Officials will delve into case studies, examining the tangible consequences of technological decisions on individuals and communities.
                </Typography>

                <Typography align="left" mb={2}>
                    Moreover, this proposal emphasizes continuous education and upskilling to keep officials abreast of the evolving technological landscape. Regular workshops, seminars, and collaboration with industry experts will be integral components, ensuring that U.S. government officials remain at the forefront of technological advancements.
                </Typography>

                <Typography align="left" mb={2}>
                    By implementing this policy, we aim to cultivate a cadre of technologically literate government officials who can make informed decisions, anticipate challenges, and navigate the intricate web of modern technologies. The repercussions of policy decisions on individuals' lives demand nothing less than a government that is not only competent but also agile in understanding and leveraging the transformative power of AI and contemporary technologies. This proposal is a proactive step towards ensuring that the United States remains a global leader in governance, equipped to address the challenges and opportunities presented by the digital age.
                </Typography>
            </Box>
        </Box>
    );
}

export default Proposals;
