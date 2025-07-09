import { ShieldCheck, DatabaseZap, ServerCog, Users, FileCheck, Lock, Zap, Cloud, Key, Eye, Globe, Smartphone, Cpu, Mail, FileLock, BarChart, AlertTriangle, Code, Settings, RefreshCw, Search, HardDrive, Network, Monitor, Terminal, Radio, Bot, Bug, UserCheck, Shield, BrainCircuit, Building, Briefcase } from 'lucide-react';

export const servicesData = [
  {
    slug: 'web-security',
    icon: ShieldCheck,
    title: 'Web Application Security',
    description: 'Comprehensive security audits and penetration testing for your web applications to identify and fix vulnerabilities.',
    link: '/services/web-security',
    longDescription: "Protect your web applications from cyber threats with our thorough security audits. We identify vulnerabilities such as SQL injection, XSS, and CSRF, ensuring your applications remain secure against real-world attacks.",
    keyFeatures: [
      'OWASP Top 10 Testing',
      'Business Logic Flaw Detection',
      'Source Code Review (Optional)',
      'Detailed Reporting with Remediation Guidance',
      'Post-remediation Verification'
    ],
    process: [
      { title: 'Scoping & Reconnaissance', description: 'Defining the scope and gathering initial information.' },
      { title: 'Automated & Manual Testing', description: 'Using advanced tools and manual testing for vulnerability identification.' },
      { title: 'Vulnerability Analysis', description: 'Analyzing findings for business impact.' },
      { title: 'Reporting & Remediation', description: 'Providing actionable steps to fix issues.' }
    ]
  },
  {
    slug: 'network-security',
    icon: DatabaseZap,
    title: 'Network Security',
    description: 'Design and implement robust network security architectures, including firewalls, IDS/IPS, and secure VPN solutions.',
    link: '/services/network-security',
    longDescription: "Secure your network infrastructure with our comprehensive assessment and hardening services. We identify weaknesses and implement robust defenses to protect against unauthorized access and data breaches.",
    keyFeatures: [
      'Firewall Rulebase Review',
      'Internal & External Penetration Testing',
      'IDS/IPS Configuration and Tuning',
      'Secure VPN & Remote Access Solutions',
      'Wireless Network Security Assessment'
    ],
    process: [
      { title: 'Architecture Review', description: 'Analyzing network topology and security controls.' },
      { title: 'Threat Modeling', description: 'Identifying potential threats and attack vectors.' },
      { title: 'Penetration Testing', description: 'Simulating attacks to test defenses.' },
      { title: 'Hardening & Optimization', description: 'Strengthening network configurations.' }
    ]
  },
  {
    slug: 'cloud-security',
    icon: ServerCog,
    title: 'Cloud Security',
    description: 'Secure your cloud environments (AWS, Azure, GCP) with expert configuration reviews and threat monitoring.',
    link: '/services/cloud-security',
    longDescription: "Ensure your cloud infrastructure is secure with our configuration audits and continuous monitoring. We align your AWS, Azure, or GCP environments with best practices to prevent misconfigurations and breaches.",
    keyFeatures: [
      'Cloud Security Posture Management (CSPM)',
      'Identity and Access Management (IAM) Review',
      'Container & Kubernetes Security',
      'Serverless Security Assessment',
      'Cloud-native Threat Detection'
    ],
    process: [
      { title: 'Environment Discovery', description: 'Mapping cloud assets and configurations.' },
      { title: 'Configuration Audit', description: 'Auditing against CIS benchmarks.' },
      { title: 'Vulnerability Assessment', description: 'Scanning for vulnerabilities in cloud resources.' },
      { title: 'Continuous Monitoring Strategy', description: 'Implementing ongoing security visibility.' }
    ]
  },
  {
    slug: 'incident-response',
    icon: Users,
    title: 'Incident Response',
    description: '24/7 incident response team to contain, eradicate, and recover from security breaches.',
    link: '/services/incident-response',
    longDescription: "Minimize the impact of security incidents with our rapid response services. Our team is available 24/7 to contain breaches, eradicate threats, and restore operations while providing forensic analysis.",
    keyFeatures: [
      '24/7 Emergency Response Retainer',
      'Digital Forensics & Malware Analysis',
      'Breach Containment & Eradication',
      'Recovery & Business Continuity Planning',
      'Post-Incident Reporting & Review'
    ],
    process: [
      { title: 'Preparation', description: 'Creating an incident response plan.' },
      { title: 'Identification & Analysis', description: 'Identifying the scope of the incident.' },
      { title: 'Containment & Eradication', description: 'Stopping and removing the threat.' },
      { title: 'Recovery & Lessons Learned', description: 'Restoring systems and improving defenses.' }
    ]
  },
  {
    slug: 'compliance',
    icon: FileCheck,
    title: 'Compliance & GRC',
    description: 'Achieve compliance with ISO 27001, PCI DSS, GDPR, and other standards through expert services.',
    link: '/services/compliance',
    longDescription: "Navigate complex compliance requirements with our GRC services. We help you achieve and maintain compliance with standards like ISO 27001, PCI DSS, and GDPR through gap analysis and remediation.",
    keyFeatures: [
      'Gap Analysis & Readiness Assessments',
      'Policy & Procedure Development',
      'Risk Management Framework Implementation',
      'Internal Audits & Mock Assessments',
      'Vendor Risk Management'
    ],
    process: [
      { title: 'Scope Definition', description: 'Identifying applicable regulations.' },
      { title: 'Gap Analysis', description: 'Assessing controls against requirements.' },
      { title: 'Remediation Roadmap', description: 'Creating a plan to address gaps.' },
      { title: 'Continuous Compliance', description: 'Establishing ongoing monitoring.' }
    ]
  },
  {
    slug: 'endpoint-security',
    icon: Lock,
    title: 'Endpoint Security',
    description: 'Protect endpoints like laptops, desktops, and mobile devices with advanced threat detection and response.',
    link: '/services/endpoint-security',
    longDescription: "Endpoints are a common entry point for attackers. Our Endpoint Security service deploys advanced tools to detect, prevent, and respond to threats across your devices, ensuring robust protection.",
    keyFeatures: [
      'Endpoint Detection and Response (EDR)',
      'Malware Protection',
      'Patch Management',
      'Device Encryption',
      'Remote Wipe Capabilities'
    ],
    process: [
      { title: 'Device Inventory', description: 'Cataloging all endpoints.' },
      { title: 'Security Configuration', description: 'Deploying EDR and encryption.' },
      { title: 'Threat Monitoring', description: 'Continuous monitoring for threats.' },
      { title: 'Incident Response', description: 'Responding to detected threats.' }
    ]
  },
  {
    slug: 'data-protection',
    icon: DatabaseZap,
    title: 'Data Protection',
    description: 'Safeguard sensitive data with encryption, DLP solutions, and data classification strategies.',
    link: '/services/data-protection',
    longDescription: "Protect your sensitive data from unauthorized access and leaks. We implement encryption, data loss prevention (DLP), and classification strategies to ensure compliance and security.",
    keyFeatures: [
      'Data Encryption at Rest & In Transit',
      'Data Loss Prevention (DLP) Deployment',
      'Data Classification & Labeling',
      'Backup & Recovery Solutions',
      'Data Privacy Assessments'
    ],
    process: [
      { title: 'Data Discovery', description: 'Identifying sensitive data locations.' },
      { title: 'Classification', description: 'Labeling data based on sensitivity.' },
      { title: 'Protection Implementation', description: 'Deploying encryption and DLP.' },
      { title: 'Monitoring & Maintenance', description: 'Ensuring ongoing data security.' }
    ]
  },
  {
    slug: 'identity-access-management',
    icon: Key,
    title: 'Identity & Access Management',
    description: 'Implement secure IAM solutions to control access and prevent unauthorized entry.',
    link: '/services/identity-access-management',
    longDescription: "Control who has access to your systems with our IAM services. We implement multi-factor authentication, role-based access controls, and identity governance to minimize risks.",
    keyFeatures: [
      'Multi-Factor Authentication (MFA)',
      'Role-Based Access Control (RBAC)',
      'Single Sign-On (SSO) Integration',
      'Privileged Access Management (PAM)',
      'Identity Governance & Administration'
    ],
    process: [
      { title: 'Access Audit', description: 'Reviewing current access controls.' },
      { title: 'Policy Development', description: 'Creating IAM policies.' },
      { title: 'Solution Deployment', description: 'Implementing MFA and SSO.' },
      { title: 'Continuous Monitoring', description: 'Ensuring compliance with policies.' }
    ]
  },
  {
    slug: 'threat-intelligence',
    icon: Eye,
    title: 'Threat Intelligence',
    description: 'Leverage actionable threat intelligence to stay ahead of cyber threats and enhance defenses.',
    link: '/services/threat-intelligence',
    longDescription: "Stay proactive with our threat intelligence services. We provide real-time insights into emerging threats, enabling you to strengthen defenses and respond to risks before they materialize.",
    keyFeatures: [
      'Dark Web Monitoring',
      'Threat Feed Integration',
      'Custom Threat Reports',
      'IOC (Indicators of Compromise) Analysis',
      'Proactive Threat Hunting'
    ],
    process: [
      { title: 'Threat Landscape Analysis', description: 'Assessing global and industry-specific threats.' },
      { title: 'Intelligence Gathering', description: 'Collecting data from multiple sources.' },
      { title: 'Analysis & Reporting', description: 'Delivering actionable insights.' },
      { title: 'Integration', description: 'Incorporating intelligence into security operations.' }
    ]
  },
  {
    slug: 'mobile-security',
    icon: Smartphone,
    title: 'Mobile Security',
    description: 'Secure mobile devices and applications with comprehensive testing and management solutions.',
    link: '/services/mobile-security',
    longDescription: "Mobile devices are critical to business but vulnerable to attacks. Our Mobile Security service ensures your apps and devices are protected with penetration testing and MDM solutions.",
    keyFeatures: [
      'Mobile App Penetration Testing',
      'Mobile Device Management (MDM)',
      'Secure App Development Guidance',
      'BYOD Policy Implementation',
      'Mobile Threat Detection'
    ],
    process: [
      { title: 'App & Device Assessment', description: 'Evaluating mobile vulnerabilities.' },
      { title: 'MDM Deployment', description: 'Implementing device management.' },
      { title: 'Testing & Hardening', description: 'Securing apps and devices.' },
      { title: 'Policy Enforcement', description: 'Ensuring compliance with policies.' }
    ]
  },
  {
    slug: 'iot-security',
    icon: Cpu,
    title: 'IoT Security',
    description: 'Protect IoT devices and networks with specialized security assessments and solutions.',
    link: '/services/iot-security',
    longDescription: "IoT devices introduce unique security challenges. Our IoT Security service assesses device vulnerabilities, secures communications, and ensures your IoT ecosystem is protected.",
    keyFeatures: [
      'Device Vulnerability Assessment',
      'Firmware Analysis',
      'Network Segmentation for IoT',
      'Secure Communication Protocols',
      'IoT Threat Monitoring'
    ],
    process: [
      { title: 'Device Discovery', description: 'Identifying all IoT devices.' },
      { title: 'Vulnerability Testing', description: 'Assessing device and firmware risks.' },
      { title: 'Security Implementation', description: 'Deploying protective measures.' },
      { title: 'Continuous Monitoring', description: 'Tracking IoT threats.' }
    ]
  },
  {
    slug: 'social-engineering',
    icon: Mail,
    title: 'Social Engineering Testing',
    description: 'Test employee resilience against phishing, vishing, and other social engineering attacks.',
    link: '/services/social-engineering',
    longDescription: "Humans are often the weakest link in security. Our Social Engineering Testing simulates phishing, vishing, and physical attacks to assess and improve employee awareness.",
    keyFeatures: [
      'Phishing Campaign Simulations',
      'Vishing (Voice Phishing) Tests',
      'Physical Security Assessments',
      'Employee Training Programs',
      'Detailed Behavioral Analysis'
    ],
    process: [
      { title: 'Planning', description: 'Designing realistic attack scenarios.' },
      { title: 'Execution', description: 'Conducting simulated attacks.' },
      { title: 'Analysis', description: 'Evaluating employee responses.' },
      { title: 'Training', description: 'Providing targeted awareness training.' }
    ]
  },
  {
    slug: 'encryption-services',
    icon: FileLock,
    title: 'Encryption Services',
    description: 'Implement robust encryption strategies to protect data at rest and in transit.',
    link: '/services/encryption-services',
    longDescription: "Ensure your data remains confidential with our encryption services. We design and deploy encryption solutions for databases, communications, and storage systems.",
    keyFeatures: [
      'End-to-End Encryption',
      'Key Management Solutions',
      'Database Encryption',
      'Secure File Transfer Protocols',
      'Encryption Policy Development'
    ],
    process: [
      { title: 'Requirements Analysis', description: 'Identifying encryption needs.' },
      { title: 'Solution Design', description: 'Selecting appropriate encryption methods.' },
      { title: 'Implementation', description: 'Deploying encryption solutions.' },
      { title: 'Key Management', description: 'Managing encryption keys securely.' }
    ]
  },
  {
    slug: 'security-awareness-training',
    icon: Users,
    title: 'Security Awareness Training',
    description: 'Educate employees on cybersecurity best practices to reduce human-related risks.',
    link: '/services/security-awareness-training',
    longDescription: "Empower your workforce with our tailored security awareness training. We cover phishing, password management, and safe internet practices to reduce human-related security risks.",
    keyFeatures: [
      'Interactive Training Modules',
      'Phishing Simulation Exercises',
      'Customized Content for Roles',
      'Progress Tracking & Reporting',
      'Ongoing Awareness Campaigns'
    ],
    process: [
      { title: 'Needs Assessment', description: 'Identifying training requirements.' },
      { title: 'Content Development', description: 'Creating role-specific training.' },
      { title: 'Delivery', description: 'Conducting training sessions.' },
      { title: 'Evaluation', description: 'Assessing training effectiveness.' }
    ]
  },
  {
    slug: 'risk-assessment',
    icon: BarChart,
    title: 'Cybersecurity Risk Assessment',
    description: 'Identify and prioritize risks to your organization with comprehensive assessments.',
    link: '/services/risk-assessment',
    longDescription: "Understand your cybersecurity risks with our thorough assessments. We identify vulnerabilities, evaluate threats, and provide a prioritized roadmap for mitigation.",
    keyFeatures: [
      'Asset Identification & Valuation',
      'Threat & Vulnerability Analysis',
      'Risk Scoring & Prioritization',
      'Mitigation Strategy Development',
      'Executive Summary Reports'
    ],
    process: [
      { title: 'Asset Mapping', description: 'Cataloging critical assets.' },
      { title: 'Threat Analysis', description: 'Identifying potential threats.' },
      { title: 'Risk Evaluation', description: 'Scoring and prioritizing risks.' },
      { title: 'Mitigation Planning', description: 'Developing a remediation plan.' }
    ]
  },
  {
    slug: 'red-team',
    icon: AlertTriangle,
    title: 'Red Team Exercises',
    description: 'Simulate advanced cyberattacks to test your organization’s defenses.',
    link: '/services/red-team',
    longDescription: "Challenge your security with our red team exercises. We simulate sophisticated attacks to identify weaknesses in your defenses and improve your response capabilities.",
    keyFeatures: [
      'Adversary Simulation',
      'Physical & Digital Attacks',
      'Social Engineering Scenarios',
      'Detailed Debrief & Recommendations',
      'Blue Team Collaboration'
    ],
    process: [
      { title: 'Planning', description: 'Defining attack scenarios.' },
      { title: 'Execution', description: 'Conducting simulated attacks.' },
      { title: 'Analysis', description: 'Evaluating defensive responses.' },
      { title: 'Reporting', description: 'Providing improvement recommendations.' }
    ]
  },
  {
    slug: 'secure-code-review',
    icon: Code,
    title: 'Secure Code Review',
    description: 'Analyze source code to identify security vulnerabilities and ensure secure development.',
    link: '/services/secure-code-review',
    longDescription: "Build secure applications with our code review services. We analyze your source code for vulnerabilities, ensuring compliance with secure coding standards.",
    keyFeatures: [
      'Static Code Analysis',
      'Manual Code Review',
      'Secure Coding Guidelines',
      'Vulnerability Remediation Support',
      'Integration with DevSecOps'
    ],
    process: [
      { title: 'Code Collection', description: 'Gathering source code.' },
      { title: 'Analysis', description: 'Performing static and manual reviews.' },
      { title: 'Reporting', description: 'Documenting vulnerabilities.' },
      { title: 'Remediation Support', description: 'Guiding developers to fix issues.' }
    ]
  },
  {
    slug: 'managed-security',
    icon: Settings,
    title: 'Managed Security Services',
    description: 'Outsource your cybersecurity operations to our 24/7 SOC for continuous protection.',
    link: '/services/managed-security',
    longDescription: "Focus on your business while we manage your cybersecurity. Our 24/7 Security Operations Center (SOC) provides monitoring, threat detection, and incident response.",
    keyFeatures: [
      '24/7 Security Monitoring',
      'Threat Detection & Response',
      'SIEM Management',
      'Incident Handling',
      'Regular Security Reports'
    ],
    process: [
      { title: 'Onboarding', description: 'Integrating with your systems.' },
      { title: 'Monitoring Setup', description: 'Deploying SIEM and monitoring tools.' },
      { title: 'Threat Detection', description: 'Identifying and analyzing threats.' },
      { title: 'Incident Response', description: 'Responding to security incidents.' }
    ]
  },
  {
    slug: 'vulnerability-management',
    icon: Search,
    title: 'Vulnerability Management',
    description: 'Continuously identify, prioritize, and remediate vulnerabilities across your IT environment.',
    link: '/services/vulnerability-management',
    longDescription: "Stay ahead of threats with our vulnerability management services. We scan your systems, prioritize risks, and guide remediation to reduce your attack surface.",
    keyFeatures: [
      'Automated Vulnerability Scanning',
      'Prioritization Based on Risk',
      'Remediation Guidance',
      'Continuous Monitoring',
      'Compliance Reporting'
    ],
    process: [
      { title: 'Scanning', description: 'Running automated scans.' },
      { title: 'Analysis', description: 'Prioritizing vulnerabilities.' },
      { title: 'Remediation', description: 'Guiding fixes for vulnerabilities.' },
      { title: 'Validation', description: 'Verifying remediation success.' }
    ]
  },
  {
    slug: 'disaster-recovery',
    icon: RefreshCw,
    title: 'Disaster Recovery Planning',
    description: 'Develop and test disaster recovery plans to ensure business continuity.',
    link: '/services/disaster-recovery',
    longDescription: "Prepare for the unexpected with our disaster recovery planning. We design and test plans to ensure rapid recovery and minimal downtime during disruptions.",
    keyFeatures: [
      'Business Impact Analysis',
      'Recovery Strategy Development',
      'DR Plan Creation',
      'Regular Testing & Updates',
      'Cloud-Based DR Solutions'
    ],
    process: [
      { title: 'Assessment', description: 'Evaluating business needs.' },
      { title: 'Planning', description: 'Creating recovery strategies.' },
      { title: 'Testing', description: 'Simulating disaster scenarios.' },
      { title: 'Maintenance', description: 'Updating plans regularly.' }
    ]
  },
  {
    slug: 'secure-remote-access',
    icon: Globe,
    title: 'Secure Remote Access',
    description: 'Enable secure remote work with VPNs, zero-trust architectures, and endpoint protection.',
    link: '/services/secure-remote-access',
    longDescription: "Support remote work securely with our solutions. We implement VPNs, zero-trust access, and endpoint protection to safeguard your distributed workforce.",
    keyFeatures: [
      'Zero-Trust Network Access (ZTNA)',
      'Secure VPN Solutions',
      'Endpoint Security Integration',
      'Access Policy Enforcement',
      'Remote Access Monitoring'
    ],
    process: [
      { title: 'Needs Assessment', description: 'Evaluating remote access requirements.' },
      { title: 'Solution Design', description: 'Selecting secure access technologies.' },
      { title: 'Deployment', description: 'Implementing access solutions.' },
      { title: 'Monitoring', description: 'Ensuring secure remote operations.' }
    ]
  },
  {
    slug: 'api-security',
    icon: Network,
    title: 'API Security',
    description: 'Secure your APIs with testing, authentication, and monitoring solutions.',
    link: '/services/api-security',
    longDescription: "APIs are critical but often vulnerable. Our API Security service tests for vulnerabilities, implements strong authentication, and monitors for threats.",
    keyFeatures: [
      'API Penetration Testing',
      'OAuth & JWT Implementation',
      'Rate Limiting & Throttling',
      'API Gateway Security',
      'Continuous API Monitoring'
    ],
    process: [
      { title: 'API Discovery', description: 'Identifying all APIs in use.' },
      { title: 'Testing', description: 'Assessing API vulnerabilities.' },
      { title: 'Security Implementation', description: 'Deploying protective measures.' },
      { title: 'Monitoring', description: 'Tracking API threats.' }
    ]
  },
  {
    slug: 'security-architecture',
    icon: HardDrive,
    title: 'Security Architecture Review',
    description: 'Assess and optimize your security architecture for maximum protection.',
    link: '/services/security-architecture',
    longDescription: "Ensure your security architecture is robust with our review services. We assess your infrastructure and recommend improvements to align with best practices.",
    keyFeatures: [
      'Architecture Assessment',
      'Threat Modeling',
      'Security Control Optimization',
      'Defense-in-Depth Strategy',
      'Future-Proofing Recommendations'
    ],
    process: [
      { title: 'Discovery', description: 'Mapping current architecture.' },
      { title: 'Assessment', description: 'Identifying weaknesses.' },
      { title: 'Recommendations', description: 'Proposing improvements.' },
      { title: 'Validation', description: 'Verifying implemented changes.' }
    ]
  },
  {
    slug: 'application-security',
    icon: Monitor,
    title: 'Application Security Testing',
    description: 'Test desktop and web applications for vulnerabilities with dynamic and static analysis.',
    link: '/services/application-security',
    longDescription: "Protect your applications with our comprehensive testing. We perform dynamic and static analysis to identify vulnerabilities and ensure secure operation.",
    keyFeatures: [
      'Dynamic Application Security Testing (DAST)',
      'Static Application Security Testing (SAST)',
      'Interactive Application Testing',
      'Remediation Guidance',
      'Compliance Testing'
    ],
    process: [
      { title: 'Scoping', description: 'Defining application scope.' },
      { title: 'Testing', description: 'Performing DAST and SAST.' },
      { title: 'Analysis', description: 'Evaluating vulnerabilities.' },
      { title: 'Reporting', description: 'Providing remediation steps.' }
    ]
  },
  {
    slug: 'penetration-testing',
    icon: Terminal,
    title: 'Penetration Testing',
    description: 'Simulate real-world attacks to identify vulnerabilities in your systems and networks.',
    link: '/services/penetration-testing',
    longDescription: "Test your defenses with our penetration testing services. We simulate real-world attacks to uncover vulnerabilities and provide actionable remediation guidance.",
    keyFeatures: [
      'External & Internal Testing',
      'Application Penetration Testing',
      'Social Engineering Tests',
      'Detailed Reporting',
      'Post-Test Remediation Support'
    ],
    process: [
      { title: 'Scoping', description: 'Defining test boundaries.' },
      { title: 'Testing', description: 'Conducting simulated attacks.' },
      { title: 'Analysis', description: 'Evaluating findings.' },
      { title: 'Reporting', description: 'Providing remediation steps.' }
    ]
  },
  {
    slug: 'wireless-security',
    icon: Radio,
    title: 'Wireless Security',
    description: 'Secure your wireless networks against unauthorized access and attacks.',
    link: '/services/wireless-security',
    longDescription: "Protect your Wi-Fi networks with our wireless security assessments. We identify vulnerabilities, secure configurations, and prevent unauthorized access.",
    keyFeatures: [
      'Wireless Network Scanning',
      'Encryption Protocol Enforcement',
      'Rogue Access Point Detection',
      'Guest Network Isolation',
      'Wireless Intrusion Detection'
    ],
    process: [
      { title: 'Network Discovery', description: 'Identifying wireless networks.' },
      { title: 'Vulnerability Assessment', description: 'Testing for weaknesses.' },
      { title: 'Hardening', description: 'Securing network configurations.' },
      { title: 'Monitoring', description: 'Tracking wireless threats.' }
    ]
  },
  {
    slug: 'devsecops',
    icon: Bot,
    title: 'DevSecOps Integration',
    description: 'Embed security into your DevOps pipeline with automated tools and processes.',
    link: '/services/devsecops',
    longDescription: "Integrate security into your development pipeline with our DevSecOps services. We implement automated security testing and monitoring to ensure secure software delivery.",
    keyFeatures: [
      'CI/CD Pipeline Security',
      'Automated Security Testing',
      'Container Security Scanning',
      'Security Policy as Code',
      'DevSecOps Training for Teams'
    ],
    process: [
      { title: 'Pipeline Assessment', description: 'Evaluating current DevOps practices.' },
      { title: 'Tool Integration', description: 'Adding security tools.' },
      { title: 'Automation', description: 'Implementing automated testing.' },
      {
 title: 'Training', description: 'Educating teams on DevSecOps.' }
    ]
  },
  {
    slug: 'malware-protection',
    icon: Bug,
    title: 'Malware Protection',
    description: 'Deploy advanced anti-malware solutions to detect and remove malicious software.',
    link: '/services/malware-protection',
    longDescription: "Safeguard your systems from malware with our protection services. We deploy and manage anti-malware tools to detect and remove threats.",
    keyFeatures: [
      'Real-time Malware Detection',
      'Signature-based and Heuristic Scanning',
      'Malware Removal & Cleanup',
      'Behavior-based Threat Analysis',
      'Regular Malware Signature Updates'
    ],
    process: [
      { title: 'Tool Deployment', description: 'Setting up anti-malware software.' },
      { title: 'Scanning', description: 'Running initial system scans.'},
      { title: 'Threat Removal', description: 'Eliminating detected malware.' },
      { title: 'Prevention', description: 'Implementing ongoing protection.' }
    ]
  },
  {
    slug: 'third-party-risk',
    icon: UserCheck,
    title: 'Third-Party Risk Management',
    description: 'Assess and manage risks from vendors and third-party integrations.',
    link: '/services/third-party-risk',
    longDescription: "Manage risks from third-party vendors with our assessment services. We evaluate vendor security and implement controls to protect your supply chain.'",
    keyFeatures: [
      'Vendor Security Assessments',
      'Third-Party Risk Scoring',
      'Contractual Security Requirements',
      'Continuous Vendor Monitoring',
      'Incident Response Coordination'
    ],
    process: [
      { title: 'Vendor Inventory', description: 'Cataloging third-party vendors.' },
      { title: 'Risk Assessment', description: 'Evaluating vendor security posture.' },
      { title: 'Mitigation', description: 'Implementing risk controls.' },
      { title: 'Monitoring', description: 'Tracking vendor compliance.' }
    ]
  },
  {
    slug: 'zero-day-protection',
    icon: Shield,
    title: 'Zero-Day Protection',
    description: 'Protect against zero-day exploits with advanced threat detection and response.',
    link: '/services/zero-day-protection',
    longDescription: "Stay protected against unknown vulnerabilities with our zero-day protection services. We use advanced detection and response techniques to mitigate zero-day threats.",
    keyFeatures: [
      'Behavioral Analysis',
      'Sandboxing for Unknown Threats',
      'Threat Intelligence Integration',
      'Rapid Response Protocols',
      'Zero-Day Patch Management'
    ],
    process: [
      { title: 'Threat Detection Setup', description: 'Deploying advanced detection tools.' },
      { title: 'Monitoring', description: 'Tracking for unknown threats.' },
      { title: 'Response', description: 'Mitigating detected zero-day exploits.' },
      { title: 'Patching', description: 'Applying rapid patches.' }
    ]
  },
  {
    slug: 'cyber-insurance-risk-assessments',
    icon: FileCheck,
    title: 'Cyber Insurance Risk Assessments',
    description: 'Assess your cybersecurity posture to meet cyber insurance requirements and secure better premiums.',
    link: '/services/cyber-insurance-risk-assessments',
    longDescription: "Our Cyber Insurance Risk Assessments help you understand and improve your security posture to meet the stringent requirements of insurance underwriters. We identify gaps and provide a clear roadmap for remediation, helping you qualify for coverage and potentially lower your premiums.",
    keyFeatures: [
      'Insurance Policy Gap Analysis',
      'Security Control Validation',
      'Risk Quantification for Underwriters',
      'Remediation Planning',
      'Attestation Reporting'
    ],
    process: [
      { title: 'Policy Review', description: 'Understanding the specific security requirements of your target insurance policy.' },
      { title: 'Technical Assessment', description: 'Evaluating your security controls against policy requirements.' },
      { title: 'Gap Identification', description: 'Identifying and prioritizing areas of non-compliance.' },
      { title: 'Reporting & Guidance', description: 'Providing a detailed report and action plan to meet insurance standards.' }
    ]
  },
  {
    slug: 'mlsecops-consulting',
    icon: Cpu,
    title: 'MLSecOps Consulting',
    description: 'Integrate security into your machine learning lifecycle, from data ingestion to model deployment.',
    link: '/services/mlsecops-consulting',
    longDescription: "Secure your AI and machine learning pipelines with our MLSecOps consulting. We help you build security into every stage of the ML lifecycle, protecting against data poisoning, model theft, and adversarial attacks, ensuring your AI initiatives are both innovative and secure.",
    keyFeatures: [
      'Secure AI/ML Pipeline Architecture',
      'Adversarial Attack Simulation',
      'Data Privacy and Integrity Checks',
      'Secure Model Deployment and Monitoring',
      'Compliance for AI Regulations'
    ],
    process: [
      { title: 'Lifecycle Assessment', description: 'Reviewing your current ML development and deployment processes.' },
      { title: 'Threat Modeling for AI', description: 'Identifying unique threats to your ML models and data.' },
      { title: 'Toolchain Integration', description: 'Integrating security tools into your MLOps pipeline.' },
      { title: 'Continuous Monitoring', description: 'Implementing monitoring for model and data security.' }
    ]
  },
  {
    slug: 'network-penetration-testing',
    icon: Terminal,
    title: 'Network Penetration Testing',
    description: 'Identify and exploit vulnerabilities in your network infrastructure to assess real-world risk.',
    link: '/services/network-penetration-testing',
    longDescription: "Our network penetration testing simulates a real-world attack on your internal and external networks. We go beyond automated scanning to manually identify, verify, and exploit vulnerabilities, providing a true assessment of your network's security and resilience.",
    keyFeatures: [
      'External & Internal Network Testing',
      'Firewall & Egress Testing',
      'VPN & Remote Access Exploitation',
      'Segmentation and Lateral Movement Testing',
      'Actionable Remediation Reporting'
    ],
    process: [
      { title: 'Scoping', description: 'Defining the scope and rules of engagement for the test.' },
      { title: 'Information Gathering', description: 'Collecting intelligence on your network footprint.' },
      { title: 'Vulnerability Exploitation', description: 'Attempting to gain unauthorized access by exploiting vulnerabilities.' },
      { title: 'Reporting & Debrief', description: 'Delivering a comprehensive report with prioritized findings and a debrief session.' }
    ]
  },
  {
    slug: 'firewall-security-audit',
    icon: Shield,
    title: 'Firewall Security Audit',
    description: 'Comprehensive review of your firewall configurations to ensure they are effectively protecting your network.',
    link: '/services/firewall-security-audit',
    longDescription: "A misconfigured firewall can leave your network exposed. Our experts conduct a thorough audit of your firewall rules, policies, and configurations to identify weaknesses, ensure compliance with best practices, and optimize your network's first line of defense.",
    keyFeatures: [
      'Rulebase Review and Optimization',
      'Configuration Hardening',
      'Access Control List (ACL) Analysis',
      'Change Management Process Review',
      'Compliance Checks (e.g., PCI DSS)'
    ],
    process: [
      { title: 'Configuration Extraction', description: 'Securely gathering firewall configuration files.' },
      { title: 'Automated & Manual Analysis', description: 'Using tools and expert review to identify issues.' },
      { title: 'Risk Assessment', description: 'Evaluating the business impact of identified weaknesses.' },
      { title: 'Reporting', description: 'Providing a detailed report with actionable hardening recommendations.' }
    ]
  },
  {
    slug: 'ai-ml-penetration-testing',
    icon: BrainCircuit,
    title: 'AI/ML Penetration Testing',
    description: 'Assess the security of your AI and Machine Learning models against unique threats like adversarial attacks.',
    link: '/services/ai-ml-penetration-testing',
    longDescription: "Traditional security testing doesn't cover the unique vulnerabilities of AI/ML systems. We perform specialized penetration testing to assess your models for risks like data poisoning, model evasion, and inference attacks, ensuring the integrity and reliability of your AI.",
    keyFeatures: [
      'Adversarial Attack Simulation',
      'Data Poisoning Tests',
      'Model Evasion and Inversion Testing',
      'Input Validation and Sanitization Review',
      'Secure AI Development Lifecycle Review'
    ],
    process: [
      { title: 'Model & Data Scoping', description: 'Understanding the AI model, its training data, and its function.' },
      { title: 'Threat Modeling', description: 'Identifying potential AI-specific attack vectors.' },
      { title: 'Attack Simulation', description: 'Executing simulated adversarial attacks to test model resilience.' },
      { title: 'Reporting & Mitigation', description: 'Detailing vulnerabilities and providing guidance on securing the model.' }
    ]
  },
  {
    slug: 'iot-penetration-testing',
    icon: Cpu,
    title: 'IoT Penetration Testing',
    description: 'Uncover vulnerabilities in your IoT devices, from firmware to communication protocols.',
    link: '/services/iot-penetration-testing',
    longDescription: "Our IoT penetration testing covers the entire ecosystem of your connected devices. We analyze hardware, firmware, mobile applications, and communication protocols to identify and mitigate security risks unique to the Internet of Things.",
    keyFeatures: [
      'Hardware Teardown and Analysis',
      'Firmware Reverse Engineering',
      'Radio Communication Analysis (Zigbee, Z-Wave, BLE)',
      'API and Cloud Backend Testing',
      'Mobile Application Control Testing'
    ],
    process: [
      { title: 'Device Reconnaissance', description: 'Understanding the device and its communication channels.' },
      { title: 'Firmware & Hardware Analysis', description: 'Extracting and analyzing firmware and hardware for vulnerabilities.' },
      { title: 'Dynamic Testing', description: 'Testing the device in operation for exploitable flaws.' },
      { title: 'Comprehensive Reporting', description: 'Providing a holistic view of vulnerabilities across the IoT ecosystem.' }
    ]
  },
  {
    slug: 'aws-hardening',
    icon: Cloud,
    title: 'AWS Hardening',
    description: 'Secure your AWS environment based on industry best practices and CIS benchmarks.',
    link: '/services/aws-hardening',
    longDescription: "We provide expert AWS security hardening services to reduce your attack surface. Our process involves a thorough review of your AWS accounts, IAM policies, network configurations (VPCs, Security Groups), and services (S3, EC2, Lambda) to implement security best practices.",
    keyFeatures: [
      'IAM Policy Tightening',
      'Security Group and NACL Optimization',
      'S3 Bucket Security',
      'CloudTrail and GuardDuty Configuration',
      'CIS AWS Foundations Benchmark Alignment'
    ],
    process: [
      { title: 'Discovery', description: 'Auditing your current AWS environment and configurations.' },
      { title: 'Analysis & Recommendations', description: 'Identifying security gaps and providing a hardening plan.' },
      { title: 'Implementation', description: 'Applying recommended security configurations and controls.' },
      { title: 'Validation', description: 'Verifying that the environment is hardened and secure.' }
    ]
  },
  {
    slug: 'azure-hardening',
    icon: Cloud,
    title: 'Azure Hardening',
    description: 'Enhance the security of your Microsoft Azure environment with our expert hardening services.',
    link: '/services/azure-hardening',
    longDescription: "Secure your Azure infrastructure against common threats. We review your Azure Active Directory, network security groups, storage accounts, and virtual machines to implement security best practices and align with the CIS Azure Foundations Benchmark.",
    keyFeatures: [
      'Azure AD Security Review',
      'Network Security Group (NSG) Optimization',
      'Secure Storage Configuration',
      'Azure Security Center Configuration',
      'CIS Azure Foundations Benchmark Alignment'
    ],
    process: [
      { title: 'Discovery', description: 'Auditing your current Azure environment and configurations.' },
      { title: 'Analysis & Recommendations', description: 'Identifying security gaps and providing a hardening plan.' },
      { title: 'Implementation', description: 'Applying recommended security configurations and controls.' },
      { title: 'Validation', description: 'Verifying that the environment is hardened and secure.' }
    ]
  },
  {
    slug: 'gcp-hardening',
    icon: Cloud,
    title: 'GCP Hardening',
    description: 'Strengthen the security posture of your Google Cloud Platform environment.',
    link: '/services/gcp-hardening',
    longDescription: "Our GCP hardening service helps you secure your Google Cloud resources. We assess your IAM policies, VPC firewall rules, Cloud Storage permissions, and other GCP services to ensure they are configured securely according to best practices.",
    keyFeatures: [
      'Cloud IAM Best Practices',
      'VPC Firewall Rule Review',
      'Secure Cloud Storage Configuration',
      'Security Command Center Setup',
      'CIS GCP Foundations Benchmark Alignment'
    ],
    process: [
      { title: 'Discovery', description: 'Auditing your current GCP environment and configurations.' },
      { title: 'Analysis & Recommendations', description: 'Identifying security gaps and providing a hardening plan.' },
      { title: 'Implementation', description: 'Applying recommended security configurations and controls.' },
      { title: 'Validation', description: 'Verifying that the environment is hardened and secure.' }
    ]
  },
  {
    slug: 'container-security',
    icon: HardDrive,
    title: 'Container Security',
    description: 'Secure your containerized environments, from image scanning to runtime protection.',
    link: '/services/container-security',
    longDescription: "We provide end-to-end security for your container lifecycle. This includes scanning container images for vulnerabilities, securing your container orchestration platform (like Kubernetes), and implementing runtime security to detect and respond to threats in running containers.",
    keyFeatures: [
      'Container Image Vulnerability Scanning',
      'Kubernetes Security Posture Management (KSPM)',
      'Runtime Threat Detection for Containers',
      'Network Policy and Pod Security Policies',
      'CIS Docker & Kubernetes Benchmarks'
    ],
    process: [
      { title: 'Pipeline Assessment', description: 'Reviewing your CI/CD pipeline for image building and deployment.' },
      { title: 'Orchestrator Configuration Review', description: 'Auditing your Kubernetes or container orchestrator setup.' },
      { title: 'Image & Runtime Scanning', description: 'Implementing tools to scan for vulnerabilities and runtime threats.' },
      { title: 'Hardening & Monitoring', description: 'Applying security policies and setting up continuous monitoring.' }
    ]
  },
  {
    slug: 'enterprise-security',
    icon: Building,
    title: 'Enterprise Security',
    description: 'Holistic security solutions to protect your entire enterprise from sophisticated threats.',
    link: '/services/enterprise-security',
    longDescription: "Our Enterprise Security services provide a comprehensive, strategic approach to protecting your organization. We work with you to develop a robust security program that covers people, processes, and technology, ensuring a resilient defense against a wide range of cyber threats.",
    keyFeatures: [
      'Security Program Development',
      'Enterprise Risk Management',
      'Security Architecture Design',
      'Threat and Vulnerability Management Program',
      'Security Operations Center (SOC) Strategy'
    ],
    process: [
      { title: 'Maturity Assessment', description: 'Evaluating your current security program against industry frameworks.' },
      { title: 'Strategy & Roadmap Development', description: 'Creating a multi-year plan to achieve your security goals.' },
      { title: 'Program Implementation', description: 'Assisting with the implementation of security controls and processes.' },
      { title: 'Continuous Improvement', description: 'Regularly reviewing and optimizing your security posture.' }
    ]
  },
  {
    slug: 'virtual-ciso-services',
    icon: Briefcase,
    title: 'Virtual CISO Services',
    description: 'Access executive-level security leadership and strategic guidance without the cost of a full-time CISO.',
    link: '/services/virtual-ciso-services',
    longDescription: "Our Virtual CISO (vCISO) service provides you with a dedicated security expert to guide your strategy, manage risk, and ensure compliance. Get the benefit of high-level cybersecurity expertise on a flexible, as-needed basis to mature your security program.",
    keyFeatures: [
      'Security Strategy and Roadmap',
      'Risk Management and Compliance Oversight',
      'Security Budget Planning',
      'Board and Executive Reporting',
      'Incident Response Leadership'
    ],
    process: [
      { title: 'Onboarding & Goal Setting', description: 'Understanding your business and defining security objectives.' },
      { title: 'Ongoing Strategic Guidance', description: 'Providing regular leadership meetings and advisory.' },
      { title: 'Program Management', description: 'Overseeing security projects and initiatives.' },
      { title: 'Reporting', description: 'Communicating security posture and progress to stakeholders.' }
    ]
  }
];

const slugify = (text) => text.toLowerCase().replace(/[\s/]+/g, '-').replace(/[()]/g, '');

export const headerServices = [
  { title: 'Cyber Insurance Risk Assessments', slug: slugify('Cyber Insurance Risk Assessments'), icon: FileCheck },
  { title: 'MLSecOps Consulting', slug: slugify('MLSecOps Consulting'), icon: Cpu },
  { title: 'Network Security', slug: 'network-security', icon: DatabaseZap },
  { title: 'Network Penetration Testing', slug: slugify('Network Penetration Testing'), icon: Terminal },
  { title: 'Firewall Security Audit', slug: slugify('Firewall Security Audit'), icon: Shield },
  { title: 'Application Security', slug: 'application-security', icon: Monitor },
  { title: 'AI/ML Penetration Testing', slug: slugify('AI/ML Penetration Testing'), icon: BrainCircuit },
  { title: 'IoT Penetration Testing', slug: slugify('IoT Penetration Testing'), icon: Cpu },
  { title: 'Web Application Penetration Testing', slug: 'web-security', icon: ShieldCheck },
  { title: 'Mobile App Penetration Testing', slug: 'mobile-security', icon: Smartphone },
  { title: 'API Penetration Testing', slug: 'api-security', icon: Network },
  { title: 'Secure Source Code Review', slug: 'secure-code-review', icon: Code },
  { title: 'DevSecOps', slug: 'devsecops', icon: Bot },
  { title: 'Cloud Security', slug: 'cloud-security', icon: ServerCog },
  { title: 'AWS Hardening', slug: slugify('AWS Hardening'), icon: Cloud },
  { title: 'Azure Hardening', slug: slugify('Azure Hardening'), icon: Cloud },
  { title: 'GCP Hardening', slug: slugify('GCP Hardening'), icon: Cloud },
  { title: 'Container Security', slug: slugify('Container Security'), icon: HardDrive },
  { title: 'Enterprise Security', slug: slugify('Enterprise Security'), icon: Building },
  { title: 'Virtual CISO Services', slug: slugify('Virtual CISO Services'), icon: Briefcase },
  { title: 'Security Architecture Review', slug: 'security-architecture-review', icon: HardDrive },
  { title: 'Phishing Simulations', slug: 'social-engineering', icon: Mail },
];