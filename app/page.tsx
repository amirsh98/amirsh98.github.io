const skills = [
  {
    title: "Core Competencies",
    tags: [
      "Bare-metal Kubernetes",
      "Proxmox VE",
      "Docker",
      "GitLab CI/CD",
      "MikroTik / Networking",
    ],
  },
  {
    title: "Orchestration & IaC",
    tags: [
      "Rancher",
      "Helm",
      "Ansible",
      "Terraform",
      "GitOps",
      "KVM",
      "VMware",
    ],
  },
  {
    title: "Storage & HA",
    tags: ["Ceph", "Longhorn", "keepalived", "NFS", "iSCSI", "RAID", "LVM"],
  },
  {
    title: "Observability & Security",
    tags: [
      "Prometheus",
      "Grafana",
      "Zabbix",
      "ELK",
      "Trivy",
      "pfSense",
      "FortiGate",
    ],
  },
  {
    title: "Networking",
    tags: [
      "VLAN",
      "IPSec / OpenVPN",
      "NGINX",
      "HAProxy",
      "Load Balancing",
      "Firewall / NAT",
      "DNS",
    ],
  },
  {
    title: "Data & Languages",
    tags: [
      "MySQL",
      "PostgreSQL",
      "MariaDB",
      "MongoDB",
      "Python",
      "Bash",
      "PowerShell",
      "Linux",
    ],
  },
];

const experience = [
  {
    role: "Senior DevOps Engineer",
    company: "Tehranpayment",
    industry: "Fintech / Payments",
    period: "July 2023 — Present",
    points: [
      "Own the self-hosted GitLab platform (Docker-based) end to end — installation, configuration, runners, version upgrades, and backup/restore, including separate backup of encryption keys so CI/CD secrets remain recoverable in a disaster.",
      "Design GitOps-based CI/CD pipelines that build, scan, and deploy containerized payment services to Kubernetes.",
      "Integrated Trivy image scanning into pipelines (post-build, pre-push), feeding findings into the security team's action process — separating security visibility from delivery gating.",
      "Operate and harden Dockerized workloads in a regulated financial environment, prioritizing stability, security, and zero-downtime releases.",
      "Built Prometheus/Grafana monitoring and alerting to surface issues before they reach production.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Charisma Financial Group",
    industry: "Financial Group",
    period: "December 2021 — July 2023",
    points: [
      "Designed and deployed a production Kubernetes cluster from scratch, including data-center network planning and physical device installation.",
      "Implemented Rancher for multi-team self-service access; built the RBAC model with ClusterRoles and ClusterRoleBindings to isolate each team to its own namespaces.",
      "Authored custom Kubernetes manifests and packaged internal applications as reusable Helm charts.",
      "Created end-to-end CI/CD pipelines in Azure DevOps across all company projects.",
      "Partnered with development teams to containerize applications and deploy them at scale on Kubernetes.",
    ],
  },
  {
    role: "DevOps Tech Lead / Infrastructure Engineer",
    company: "Mobinnet Telecom",
    industry: "Telecom / ISP",
    period: "April 2019 — December 2021",
    points: [
      "Served as DevOps tech lead for a 12-person engineering group — owning platform standards, architecture decisions, and mentoring.",
      "Led the design and deployment of a 16-node bare-metal Kubernetes cluster across two geographically separate data centers, using a single stretched cluster with asymmetric etcd quorum in the primary site for resilience against inter-site link failure.",
      "Architected multi-tenant isolation so several contractors could safely share cluster resources, enforced through namespaces, RBAC, and network policy.",
      "Selected and operated the bare-metal platform stack: Longhorn for storage (a deliberate trade-off accepting ReadWriteOnce for fast, right-sized deployment) and keepalived/VIP for load balancing; resolved VIP flapping by tuning health-check failover thresholds.",
      "Drove company-wide Docker adoption — standardized containerization practices and mentored teams building their first Dockerfiles and pipelines.",
      "Built PaaS capabilities and self-service developer workflows on private-cloud infrastructure; introduced Infrastructure-as-Code to replace manual provisioning.",
    ],
  },
  {
    role: "Infrastructure Engineer",
    company: "Chista",
    industry: "Startup — Intelligent Transportation & IT Solutions",
    period: "August 2014 — April 2019",
    points: [
      "Early-stage startup (~50 staff, ~60 virtual servers) delivering national mapping, ITS, and IT solutions.",
      "Deployed MySQL and MariaDB with master–slave and master/multi-slave replication for high availability; tuned PostgreSQL for application-specific workloads.",
      "Configured NGINX as web server and load balancer; wrote custom scripts for NGINX log parsing.",
      "Developed a Python-based Telegram alerting system integrated with monitoring for real-time incident notifications.",
      "Stood up observability with Zabbix, PRTG, Prometheus, and Grafana; operated Map-as-a-Service tile generation (vector & raster).",
      "Designed VLAN-based network segmentation and managed the full network and server stack: Cisco switches, MikroTik routers (routing, firewall/NAT, site-to-site VPN), FortiGate UTM, pfSense, and Windows Active Directory across three floors.",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- Nav ---------- */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            Amirhossein Jamshidpour
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header className="hero" id="top">
        <div className="container">
          <div className="hero-layout">
            <img
              src="https://avatars.githubusercontent.com/u/16860771?v=4"
              alt="Amirhossein Jamshidpour"
              className="hero-avatar"
              width={150}
              height={150}
            />
            <div className="hero-text">
              <h1>
                Amirhossein <span className="accent">Jamshidpour</span>
              </h1>
              <p className="role">
                Senior DevOps Engineer · Bare-Metal &amp; Self-Hosted Platform
                Engineering
              </p>
              <p className="tagline">
                Self-taught DevOps engineer with 10+ years designing and
                operating production infrastructure across fintech, telecom,
                and IT-services companies. I specialize in bare-metal Kubernetes
                and self-hosted platform engineering — building the full stack
                from network segmentation up to multi-tenant clusters, CI/CD,
                and observability, without dependence on managed cloud services.
              </p>
              <div className="hero-actions">
                <a href="#experience" className="btn btn-primary">
                  View Experience
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- About ---------- */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">
            Former DevOps tech lead who has driven company-wide containerization
            adoption, set platform standards, and mentored engineering teams.
          </p>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I design and operate production infrastructure across the full
                stack — from network segmentation and bare-metal hardware up to
                multi-tenant Kubernetes clusters, CI/CD, and observability. My
                work is built on <strong>self-hosted, on-premises platforms</strong>{" "}
                with no dependence on managed cloud services.
              </p>
              <p>
                I'm comfortable owning architecture decisions and the trade-offs
                behind them — from storage choices like Longhorn to asymmetric
                etcd quorum for stretched clusters. I believe infrastructure
                should be <strong>declarative, reproducible, and observable</strong>,
                and that every change should be reversible.
              </p>
            </div>
            <ul className="focus-list">
              <li>
                <span className="dot">•</span> Bare-metal Kubernetes in
                production
              </li>
              <li>
                <span className="dot">•</span> Self-hosted platform engineering
                (GitLab, Rancher, CI/CD)
              </li>
              <li>
                <span className="dot">•</span> Multi-tenant isolation via
                namespaces, RBAC &amp; network policy
              </li>
              <li>
                <span className="dot">•</span> Observability, monitoring &amp;
                alerting
              </li>
              <li>
                <span className="dot">•</span> Backup, disaster recovery &amp;
                incident response
              </li>
              <li>
                <span className="dot">•</span> Security hardening &amp; secrets
                management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <p className="section-sub">
            Technologies and tools I work with across the stack.
          </p>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <h3>{s.title}</h3>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">
            10+ years across fintech, telecom, and IT-services.
          </p>
          <div className="timeline">
            {experience.map((e) => (
              <div className="exp-item" key={e.company}>
                <div className="exp-head">
                  <h3>{e.company}</h3>
                  <span className="period">{e.period}</span>
                </div>
                <div className="exp-role">
                  {e.role} · {e.industry}
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Education & Languages ---------- */}
      <section className="section" id="education">
        <div className="container">
          <h2 className="section-title">Education &amp; Languages</h2>
          <p className="section-sub">Background and communication.</p>
          <div className="about-grid">
            <div className="about-text">
              <h3 className="mini-title">Education</h3>
              <p>
                <strong>B.Sc. in Computer Engineering</strong> — Islamic Azad
                University, 2009–2011
              </p>
            </div>
            <ul className="focus-list">
              <li>
                <span className="dot">•</span>{" "}
                <strong>Persian</strong> — Native
              </li>
              <li>
                <span className="dot">•</span> <strong>English</strong> —
                Professional working proficiency
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">
            Tehran, Iran · Open to International Remote
          </p>
          <div className="contact-grid">
            <a href="mailto:Mr.jamshidpour@gmail.com" className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">Mr.jamshidpour@gmail.com</span>
            </a>
            <a href="tel:+989398611686" className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+98 939 861 1686</span>
            </a>
            <a
              href="https://github.com/amirsh98"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/amirsh98</span>
            </a>
            <a
              href="https://linkedin.com/in/amirhossein-j-b39b7381"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                linkedin.com/in/amirhossein-j-b39b7381
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Amirhossein Jamshidpour · Built with
            Next.js ·{" "}
            <a
              href="https://github.com/amirsh98"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
