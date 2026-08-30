/** Every user-facing string ships in both languages; CSS decides which one is visible. */
export type Bi = { ko: string; en: string };

export const owner = {
  name: "KRYUK",
  email: "kryukihide2009@gmail.com",
  github: "https://github.com/rladnwls122",
};

export const nav = [
  { id: "about", label: "01 ABOUT" },
  { id: "journey", label: "02 JOURNEY" },
  { id: "stack", label: "03 STACK" },
  { id: "works", label: "04 WORKS" },
  { id: "system", label: "05 SYSTEM" },
  { id: "failure", label: "06 FAILURE" },
  { id: "contact", label: "07 CONTACT" },
];

export const hero = {
  lede: {
    ko: "안녕하세요.\n문제를 만나면 원인을 찾고,\n찾은 원인을 기록하고,\n다음에는 더 빠르게 해결하는 개발자입니다.",
    en: "Hello.\nI hunt down the cause,\nwrite down what I found,\nand solve it faster next time.",
  } as Bi,
  tags: ["CLOUD", "BACKEND", "INFRASTRUCTURE", "WEB"],
};

/** The hero terminal scroll. Lines are taken from the work described further down. */
export const logLines = [
  "$ terraform apply -auto-approve",
  "aws_vpc.main: Creation complete after 2s",
  "aws_subnet.private[0]: Creation complete",
  "module.eks: node group ACTIVE",
  "$ kubectl get pods -A",
  "api-7d9c4  1/1  Running",
  "worker-2fa  1/1  Running",
  "WARN  throttling: rate exceeded -> backoff",
  "$ tail -f /var/log/app.log",
  "ERROR dns resolution failed (VPC lambda)",
  "→ checking route table / nat gateway",
  "FIXED  outbound path corrected",
  '$ git commit -m "runbook: add recovery steps"',
  "deploy: succeeded in 41s",
  '$ echo "build. break. solve."',
];

export const about = {
  lead: {
    ko: "인천의 고등학생 개발자입니다. 클라우드 인프라를 세우고, 그 위에 백엔드 API를 올려, 사람이 실제로 쓰는 화면까지 붙입니다.",
    en: "A high-school developer in Incheon. I stand up the cloud infrastructure, put the backend API on top of it, and ship the screens people actually use.",
  } as Bi,
  body: {
    ko: "프로젝트를 하면서 배운 건 기술보다 태도였습니다. 혼자 잘하는 것보다 함께 만드는 법 — 규칙을 정하고, 기록을 남기고, 다음 사람이 이어받을 수 있게 하는 일. 지금도 같은 방식으로 서비스를 만들고 있습니다.",
    en: "Projects taught me attitude before technology — and how to build with other people rather than alone: agree on the rules, leave the record, make it possible for the next person to pick it up. I still build the same way.",
  } as Bi,
  meta: ["INCHEON, KOREA", "CLOUD COMPUTING", "BACKEND", "WEB DEVELOPMENT"],
};

export type JourneyEntry = {
  year: Bi;
  kicker?: Bi;
  title: Bi;
  body: Bi[];
  quote?: Bi;
  /** accent = award, dim = placed, faint = earlier, open = still ahead */
  dot: "accent" | "dim" | "faint" | "open";
};

export const journey: JourneyEntry[] = [
  {
    year: { ko: "고1", en: "G10" },
    kicker: { ko: "CLUB · 게임개발동아리", en: "CLUB · GAME DEV" },
    title: {
      ko: "턴제 카드 게임을 처음 완성했다",
      en: "My first thing that actually ran",
    },
    body: [
      {
        ko: '동아리에서 팀으로 게임을 만들며 처음 "돌아가는 것"을 완성했습니다. 규칙이 하나 늘 때마다 버그가 두 개 늘던 경험이, 상태를 한곳에서 관리해야 한다는 감각으로 남았습니다.',
        en: "Building a game with a club team gave me my first working product. Every new rule added two new bugs — that is where I learned state belongs in one place.",
      },
    ],
    dot: "faint",
  },
  {
    year: { ko: "고2", en: "G11" },
    kicker: { ko: "SILVER · 은상", en: "SILVER MEDAL" },
    title: {
      ko: "지방기능경기대회 — 클라우드컴퓨팅",
      en: "Regional Skills Competition — Cloud Computing",
    },
    body: [
      {
        ko: "기능반에 처음 들어가 시작한 첫 대회입니다. AWS를 직접 공부하며 인프라 구축 과정을 문서화하고 표준화했습니다. 같은 실수를 두 번 하지 않도록 절차를 만드는 습관이 여기서 시작됐습니다.",
        en: "My first competition after joining the skills lab. I studied AWS on my own and standardized every build step in writing, so I would never repeat the same mistake.",
      },
    ],
    dot: "accent",
  },
  {
    year: { ko: "고2", en: "G11" },
    kicker: {
      ko: "AWARDED · 교내 개발마라톤 수상작",
      en: "AWARDED · SCHOOL HACKATHON",
    },
    title: {
      ko: "IΔEA — AI 학습 · 문제 공유 플랫폼",
      en: "IΔEA — AI learning & question sharing",
    },
    body: [
      {
        ko: "교내 개발마라톤에서 AI 기반 맞춤 문제 출제 서비스를 만들어 수상했습니다. 대회용 데모가 아니라 계속 고쳐 쓰는 서비스로 남겨두고 있습니다.",
        en: "An award-winning AI question-generation service from the school hackathon — kept alive as a real product instead of a demo.",
      },
    ],
    dot: "accent",
  },
  {
    year: { ko: "고2", en: "G11" },
    kicker: { ko: "MERIT · 장려상 8등", en: "MERIT · 8TH NATIONWIDE" },
    title: {
      ko: "전국기능경기대회 — 클라우드컴퓨팅",
      en: "National Skills Competition — Cloud Computing",
    },
    body: [
      {
        ko: "제한된 시간 안에서 구축과 트러블슈팅을 동시에 수행했습니다. 완벽한 설계보다 먼저 동작하게 만들고, 로그를 읽어 원인을 좁히는 방식을 몸으로 익혔습니다.",
        en: "Building and troubleshooting at once, under a hard clock. Make it run first, then read the logs and narrow the cause down.",
      },
      {
        ko: "기능반에 들어가 밤새며 훈련했던 시간은, 사람이 이렇게까지 열심히 살 수도 있구나를 처음으로 알게 해준 경험이었습니다. 앞으로 살아가는 동안 기준점이 될 것 같습니다.",
        en: "Training through the night in the skills lab showed me how hard a person can actually work. It became the reference point for the rest of my life.",
      },
    ],
    quote: {
      ko: "출전 경력이 전혀 없던 학교에서 형이 혼자 전국 3등을 만들어내고, 뒤따라온 저희까지 이끌어준 게 정말 존경스러웠습니다. 그 형처럼 살아야겠다고 다짐했습니다.",
      en: "At a school with no competition history, my senior took 3rd place nationwide on his own — and then pulled the rest of us up with him. I decided to live like that.",
    },
    dot: "dim",
  },
  {
    year: { ko: "NEXT", en: "NEXT" },
    title: { ko: "더 복잡한 시스템으로", en: "Toward harder systems" },
    body: [
      {
        ko: "사용자가 있는 서비스를 직접 운영하며, 장애를 예측하고 복구까지 설계하는 엔지니어.",
        en: "An engineer who runs a service with real users, predicts failure and designs the recovery.",
      },
    ],
    dot: "open",
  },
];

export const counters: { to: number; suffix?: string; label: Bi }[] = [
  { to: 3, label: { ko: "수상 경력", en: "AWARDS RECEIVED" } },
  { to: 6, label: { ko: "진행한 프로젝트", en: "PROJECTS SHIPPED" } },
  { to: 24, suffix: "+", label: { ko: "직접 다뤄본 기술", en: "TECHNOLOGIES USED" } },
];

export const stack: {
  group: string;
  highlight?: boolean;
  items: { label: Bi; note?: Bi }[];
}[] = [
  {
    group: "CLOUD / INFRA",
    highlight: true,
    items: [
      { label: { ko: "AWS (EC2 · VPC · IAM)", en: "AWS (EC2 · VPC · IAM)" } },
      { label: { ko: "EKS · Kubernetes", en: "EKS · Kubernetes" } },
      { label: { ko: "Terraform", en: "Terraform" } },
      { label: { ko: "Lambda · S3 · KMS", en: "Lambda · S3 · KMS" } },
      { label: { ko: "ALB · Auto Scaling", en: "ALB · Auto Scaling" } },
      { label: { ko: "Docker", en: "Docker" } },
    ],
  },
  {
    group: "BACKEND",
    items: [
      { label: { ko: "NestJS · Node.js", en: "NestJS · Node.js" } },
      { label: { ko: "REST API 설계", en: "REST API design" } },
      { label: { ko: "Python · boto3", en: "Python · boto3" } },
      { label: { ko: "Go · Gin", en: "Go · Gin" } },
      { label: { ko: "MySQL · TiDB", en: "MySQL · TiDB" } },
      { label: { ko: "DynamoDB", en: "DynamoDB" } },
      { label: { ko: "Redis · BullMQ", en: "Redis · BullMQ" } },
      { label: { ko: "Gemini API · SSE", en: "Gemini API · SSE" } },
      { label: { ko: "Jest · E2E", en: "Jest · E2E" } },
    ],
  },
  {
    group: "FRONTEND",
    items: [
      { label: { ko: "Next.js", en: "Next.js" } },
      { label: { ko: "React", en: "React" } },
      { label: { ko: "TypeScript", en: "TypeScript" } },
      { label: { ko: "Tailwind CSS", en: "Tailwind CSS" } },
      { label: { ko: "Unity · C# (고1)", en: "Unity · C# (G10)" } },
    ],
  },
  {
    group: "WORKFLOW",
    items: [
      { label: { ko: "Linux · Shell", en: "Linux · Shell" } },
      { label: { ko: "Git · GitHub", en: "Git · GitHub" } },
      { label: { ko: "런북 · 문서화", en: "Runbooks · Docs" } },
      { label: { ko: "CloudWatch · 관측성", en: "CloudWatch · Observability" } },
      { label: { ko: "Vercel", en: "Vercel" } },
      { label: { ko: "PowerShell", en: "PowerShell" } },
    ],
  },
  {
    group: "AI ENGINEERING",
    highlight: true,
    items: [
      {
        label: { ko: "Claude Code 하네스 구축", en: "Claude Code harness" },
        note: {
          ko: "에이전트 실행 환경과 규칙을 직접 설계",
          en: "Designed the agent runtime and its rules",
        },
      },
      {
        label: { ko: "멀티 에이전트 오케스트레이션", en: "Multi-agent orchestration" },
        note: {
          ko: "작업 분해 · 위임 · 검증 루프 구성",
          en: "Task decomposition, delegation, verification loops",
        },
      },
      {
        label: { ko: "컨텍스트 레이어 개편", en: "Context layer redesign" },
        note: {
          ko: "필요한 정보만 남겨 토큰과 오류를 줄임",
          en: "Kept only what matters — fewer tokens, fewer errors",
        },
      },
    ],
  },
];

export type Media =
  | { kind: "swap"; still: string; motion: string; hint: Bi; alt: string }
  | { kind: "gif"; src: string; hint: Bi; alt: string }
  | {
      kind: "term";
      label: string;
      lines: { text: string; tone?: "ok" | "warn" | "accent" }[];
    };

export type Work = {
  id: string;
  title: string;
  badge: Bi;
  tag: string;
  summary: Bi;
  tech: string[];
  takeaway: Bi;
  stats?: string[];
  href?: string;
  hrefLabel?: string;
  links?: { label: string; href: string }[];
  media: Media;
};

export const works: Work[] = [
  {
    id: "idea",
    title: "IΔEA",
    badge: { ko: "교내 개발마라톤 수상작", en: "HACKATHON AWARD" },
    tag: "LIVE",
    summary: {
      ko: "문항을 골라 담아 풀고 → 틀린 이유를 태그·주석으로 남기고 → AI가 약점 데이터로 다시 출제하는 학습 루프를 하나의 플랫폼에 담았습니다.",
      en: "Pick questions and take the exam → tag and annotate why you got it wrong → the AI regenerates from your weakness data. One closed learning loop.",
    },
    tech: ["NEXT.JS", "NESTJS", "TIDB SERVERLESS", "GEMINI · SSE", "BULLMQ · REDIS"],
    takeaway: {
      ko: "대량 생성 요청이 몰리면 응답이 멈췄습니다. BullMQ · Redis로 큐를 분리해 즉시 응답 후 백그라운드에서 처리하도록 바꾸면서, 사용자가 기다리는 구간과 서버가 일하는 구간은 분리해야 한다는 걸 배웠습니다. 팀 4명 중 기획과 전체 개발을 맡았습니다.",
      en: "Bulk generation requests froze responses. Splitting them onto a BullMQ · Redis queue — answer instantly, process in the background — taught me to separate where the user waits from where the server works. I led planning and all development in a team of four.",
    },
    stats: ["15 NESTJS MODULES", "50+ API ENDPOINTS", "117 TESTS · 100% PASS"],
    href: "https://i-ea-web.vercel.app/",
    hrefLabel: "OPEN ↗",
    links: [{ label: "GITHUB · I-EA ↗", href: "https://github.com/rladnwls122/I-EA" }],
    media: {
      kind: "gif",
      src: "/img/idea-demo.gif",
      hint: { ko: "마우스를 올리면 재생", en: "HOVER TO PLAY" },
      alt: "IΔEA 서비스 데모 화면",
    },
  },
  {
    id: "guidebook",
    title: "GUIDEBOOK",
    badge: { ko: "후배들을 위한 학습 모듈", en: "FOR THE NEXT COHORT" },
    tag: "LIVE",
    summary: {
      ko: "기능경기대회 학습 기록과 시행착오를 4주 로드맵으로 정리한 가이드북입니다.",
      en: "My competition notes and mistakes, rebuilt as a four-week roadmap.",
    },
    tech: ["NEXT.JS", "VERCEL", "TECHNICAL WRITING"],
    takeaway: {
      ko: '정답만 적으면 다음 사람은 상황이 조금 달라져도 막힙니다. "왜 그렇게 판단했는지"를 함께 적기 시작하면서, 설명할 수 있어야 진짜 아는 것이라는 걸 알았습니다.',
      en: "Answers alone stop working the moment the situation shifts. Writing down why I judged that way made me realize I only know what I can explain.",
    },
    href: "https://skills-2026-learn-module.vercel.app/",
    hrefLabel: "OPEN ↗",
    media: {
      kind: "swap",
      still: "/img/guide-hero.png",
      motion: "/img/guide-module.png",
      hint: { ko: "마우스를 올리면 내부 화면", en: "HOVER TO LOOK INSIDE" },
      alt: "가이드북 학습 모듈 화면",
    },
  },
  {
    id: "monitoring",
    title: "MONITORING",
    badge: { ko: "클라우드 · K8s 대시보드", en: "CLOUD · K8S DASHBOARD" },
    tag: "DASHBOARD",
    summary: {
      ko: '"지금 무엇이 아픈가"만 첫 화면에 남기고, 나머지 지표는 드릴다운으로 밀어 넣은 대시보드입니다.',
      en: 'The first screen answers only "what hurts right now"; everything else moved into drill-downs.',
    },
    tech: ["NEXT.JS", "CLOUDWATCH", "K8S API"],
    takeaway: {
      ko: "폴링 주기를 짧게 두자 API 스로틀링이 발생했습니다. 지표마다 필요한 신선도가 다르다는 것을, 호출량을 줄이면서 배웠습니다.",
      en: "Short polling intervals triggered API throttling. Cutting the call volume taught me each metric needs its own freshness.",
    },
    href: "https://github.com/rladnwls122/skills_dashboard-wooj",
    hrefLabel: "GITHUB ↗",
    media: {
      kind: "term",
      label: "$ kubectl get pods -A",
      lines: [
        { text: "api-7d9c4        1/1   Running", tone: "ok" },
        { text: "worker-2fa1c     1/1   Running", tone: "ok" },
        { text: "ingest-9be02     0/1   CrashLoopBackOff", tone: "warn" },
        { text: "WARN cloudwatch: rate exceeded → backoff", tone: "warn" },
        { text: "→ 한 화면에서 원인 후보 좁히기", tone: "accent" },
      ],
    },
  },
  {
    id: "skills-2026",
    title: "SKILLS-2026",
    badge: { ko: "팀 대회 준비 저장소", en: "TEAM TRAINING REPO" },
    tag: "TEAM REPO",
    summary: {
      ko: "각자 흩어져 있던 연습 기록과 환경 구성 스크립트, 런북을 저장소 하나로 모았습니다.",
      en: "One repository for the practice logs, setup scripts and runbooks we each kept separately.",
    },
    tech: ["TERRAFORM", "KUBERNETES", "SHELL", "RUNBOOK"],
    takeaway: {
      ko: '"누가 먼저 풀었는가"보다 "어떤 순서가 빠른가"를 기록하는 팀이 강해집니다. 혼자 잘하는 것보다 절차를 공유하는 게 훨씬 빠릅니다.',
      en: "A team gets stronger by recording which order is fastest, not who solved it first. Sharing procedure beats being individually good.",
    },
    href: "https://github.com/ishs-cloud-computing/skills-2026",
    hrefLabel: "GITHUB ↗",
    media: {
      kind: "term",
      label: "$ git log --oneline -5",
      lines: [
        { text: "a1f9c02 runbook: EKS 구축 순서 정리" },
        { text: "7b3e514 practice: VPC 과제 3회차 풀이" },
        { text: "2c88a9d fix: 노드 조인 실패 원인 기록" },
        { text: "e4d1077 docs: 팀 커밋 규칙 추가" },
        { text: "9ac6b31 init: 대회 준비 저장소" },
      ],
    },
  },
  {
    id: "infra",
    title: "CLOUD INFRA",
    badge: { ko: "AWS 3-tier · 코드로 재현", en: "AWS 3-TIER · FROM CODE" },
    tag: "INFRA",
    summary: {
      ko: "VPC부터 오토스케일링까지 Terraform 모듈로 쪼개고, 구축 순서를 런북으로 고정한 환경입니다.",
      en: "From VPC to autoscaling, split into Terraform modules with the build order fixed in a runbook.",
    },
    tech: ["AWS", "TERRAFORM", "EKS", "RDS"],
    takeaway: {
      ko: "콘솔로 만든 환경은 다시 만들 수 없습니다. 한 번의 apply로 같은 환경이 돌아오게 만든 뒤부터, 대회에서 구축이 아니라 트러블슈팅에 시간을 쓸 수 있었습니다.",
      en: "An environment clicked together in a console cannot be rebuilt. Once one apply brought it back, competition time went to troubleshooting instead of setup.",
    },
    href: "#system",
    hrefLabel: "SEE THE DIAGRAM →",
    media: {
      kind: "term",
      label: "$ terraform apply",
      lines: [
        { text: "aws_vpc.main              created", tone: "ok" },
        { text: "aws_subnet.private[0]     created", tone: "ok" },
        { text: "module.eks.node_group     ACTIVE", tone: "ok" },
        { text: "aws_db_instance.main      available", tone: "ok" },
        { text: "Apply complete. 34 added.", tone: "accent" },
      ],
    },
  },
  {
    id: "game",
    title: "TURN-BASED GAME",
    badge: { ko: "고1 게임개발동아리", en: "G10 GAME DEV CLUB" },
    tag: "ARCHIVE",
    summary: {
      ko: '카드 · 턴제 전투 게임. 처음으로 "돌아가는 것"을 완성한 프로젝트입니다.',
      en: "A card-based turn combat game — the first thing I made that actually ran.",
    },
    tech: ["UNITY", "C#", "GAME LOGIC"],
    takeaway: {
      ko: "턴 순서, 마나, 상태 이상 — 규칙이 하나 늘 때마다 버그가 두 개 늘었습니다. 상태를 한곳에서 관리해야 한다는 걸, 게임에서 먼저 배웠습니다.",
      en: "Turn order, mana, status effects — one new rule, two new bugs. The game taught me to keep state in one place.",
    },
    media: {
      kind: "gif",
      src: "/img/game.gif",
      hint: { ko: "마우스를 올리면 재생", en: "HOVER TO PLAY" },
      alt: "고등학교 1학년 때 만든 턴제 카드 게임",
    },
  },
];

export const diagrams: {
  id: string;
  label: string;
  sub: string;
  open: Bi;
  shows: Bi;
  breaks: Bi;
  source: string;
}[] = [
  {
    id: "diagram-aws",
    label: "AWS 3-TIER · TERRAFORM",
    sub: "RTB ↔ SUBNET MAPPING",
    open: { ko: "AWS 3-tier 도식 보기", en: "VIEW THE AWS 3-TIER DIAGRAM" },
    shows: {
      ko: "AZ 두 곳에 퍼블릭·프라이빗 서브넷을 두고, NAT는 각 AZ의 퍼블릭 서브넷 안에 배치했습니다. 퍼블릭 RTB는 하나를 공유하지만 프라이빗 RTB는 AZ마다 따로입니다 — 각자 같은 AZ의 NAT를 가리켜야 한쪽 AZ가 죽어도 다른 AZ가 삽니다. 점선은 NAT의 아웃바운드가 결국 퍼블릭 RTB를 거쳐 IGW로 나간다는 뜻입니다.",
      en: "Public and private subnets in two AZs, with the NAT placed inside each AZ's public subnet. The public route table is shared, but private route tables are per-AZ — each pointing at the NAT in its own AZ, so one AZ failing does not take the other down. The dotted edge means NAT outbound still leaves through the public route table to the IGW.",
    },
    breaks: {
      ko: "서브넷 태그가 빠지면 노드가 클러스터에 조인하지 못하고, 프라이빗 RTB의 기본 라우트가 없으면 아웃바운드 DNS부터 실패합니다. 확인 순서는 RTB ↔ 서브넷 매핑 → 기본 라우트의 NatGatewayId → 노드 조인 로그입니다.",
      en: "A missing subnet tag stops nodes from joining the cluster; a missing default route in the private RTB kills outbound DNS first. Check order: RTB ↔ subnet mapping → the default route's NatGatewayId → node join logs.",
    },
    source: `graph TB
  IGW["IGW<br/>internet gateway"]
  subgraph VPC["ideas-vpc · 10.0.0.0/16"]
    subgraph PUB["public subnet · AZ a/c"]
      ALB@{ icon: "logos:aws-elb", form: "square", label: "ALB<br/>HTTPS · health check", pos: "b", h: 46, w: 46 }
      NATA["NAT GW a<br/>outbound only"]
      NATC["NAT GW c<br/>outbound only"]
    end
    subgraph APP["private subnet · app"]
      EKS@{ icon: "logos:aws-eks", form: "square", label: "EKS node group<br/>autoscaling", pos: "b", h: 46, w: 46 }
      POD@{ icon: "logos:kubernetes", form: "square", label: "pods<br/>IRSA per pod", pos: "b", h: 46, w: 46 }
    end
    subgraph DATA["private subnet · data · Multi-AZ"]
      RDS@{ icon: "logos:aws-rds", form: "square", label: "RDS primary<br/>writer", pos: "b", h: 46, w: 46 }
      STB@{ icon: "logos:aws-rds", form: "square", label: "RDS standby<br/>failover", pos: "b", h: 46, w: 46 }
    end
    RTBPUB["public-rtb<br/>0.0.0.0/0 → IGW"]
    RTBA["private-rtb-a<br/>0.0.0.0/0 → ngw-a"]
    RTBC["private-rtb-c<br/>0.0.0.0/0 → ngw-c"]
  end
  IGW --> ALB
  ALB --> EKS
  EKS --> POD
  POD --> RDS
  RDS -.-> STB
  ALB --- RTBPUB
  POD --- RTBA
  POD --- RTBC
  RTBA --> NATA
  RTBC --> NATC
  NATA -.-> RTBPUB
  NATC -.-> RTBPUB
  RTBPUB --> IGW`,
  },
  {
    id: "diagram-idea",
    label: "IΔEA · REQUEST FLOW",
    sub: "QUEUE-BACKED GENERATION",
    open: { ko: "IΔEA 요청 흐름 도식 보기", en: "VIEW THE IΔEA REQUEST FLOW" },
    shows: {
      ko: "사용자 요청은 Next.js → NestJS REST까지 실선으로 즉시 응답하고, 무거운 문항 생성은 BullMQ·Redis 큐로 넘깁니다. Gemini 결과는 SSE로 되돌려 보내므로(점선) 화면은 생성이 끝날 때까지 멈추지 않습니다. 오답 기록과 문제은행은 TiDB 한 곳에 모입니다.",
      en: "The user request answers immediately along the solid path (Next.js → NestJS REST), while heavy question generation is handed to a BullMQ · Redis queue. Gemini output streams back over SSE (dotted), so the UI never blocks. Wrong-answer records and the question bank live in one TiDB.",
    },
    breaks: {
      ko: "모델 응답의 스키마가 깨지는 지점과 대량 생성 병목입니다. 검증·재시도 레이어에서 잡고 실패 원문을 로그로 남기며, 편집 저장은 ProseMirror JSON 한 포맷으로 통일했습니다.",
      en: "Response-schema collapse and bulk-generation bottlenecks. Validation and retries catch them, raw failures go to the log, and editing is persisted through one ProseMirror JSON format.",
    },
    source: `graph LR
  subgraph CLIENT["client · 17+ pages"]
    WEB@{ icon: "simple-icons:nextdotjs", form: "square", label: "Next.js<br/>App Router", pos: "b", h: 46, w: 46 }
  end
  subgraph API["NestJS · 15 modules"]
    REST@{ icon: "logos:nestjs", form: "square", label: "REST API<br/>50+ endpoints", pos: "b", h: 46, w: 46 }
    SSE["SSE<br/>token by token"]
  end
  subgraph ASYNC["async generation"]
    QUEUE@{ icon: "logos:redis", form: "square", label: "BullMQ · Redis<br/>job per request", pos: "b", h: 46, w: 46 }
    GEMINI@{ icon: "local:gemini", form: "square", label: "Gemini<br/>schema-validated", pos: "b", h: 46, w: 46 }
  end
  subgraph STORE["storage"]
    DB@{ icon: "simple-icons:tidb", form: "square", label: "TiDB Serverless<br/>20+ tables", pos: "b", h: 46, w: 46 }
    S3@{ icon: "logos:aws-s3", form: "square", label: "S3<br/>presigned upload", pos: "b", h: 46, w: 46 }
  end
  BANK["shared question bank<br/>public after review"]
  WEB --> REST
  REST --> QUEUE
  QUEUE --> GEMINI
  GEMINI -.-> SSE
  SSE -.-> WEB
  GEMINI --> DB
  REST --> DB
  WEB --> S3
  DB --> BANK
  BANK -.-> REST`,
  },
];

export const failures: { tag: string; title: string; steps: Bi[] }[] = [
  {
    tag: "AWS",
    title: "Lambda DNS Resolution Failure",
    steps: [
      { ko: "VPC 내 Lambda의 DNS 실패 확인", en: "confirmed DNS failure for a Lambda in the VPC" },
      { ko: "서브넷 라우팅 · NAT 경로 점검", en: "checked subnet routing and the NAT path" },
      { ko: "아웃바운드 경로 수정 후 해결", en: "fixed the outbound path, resolved" },
    ],
  },
  {
    tag: "KUBERNETES",
    title: "Autoscaling Failure",
    steps: [
      { ko: "노드가 늘지 않는 현상 재현", en: "reproduced nodes failing to scale up" },
      { ko: "Launch Template · 태그 확인", en: "inspected the launch template and tags" },
      { ko: "설정 수정, 스케일 정상화", en: "corrected config, scaling recovered" },
    ],
  },
  {
    tag: "TERRAFORM",
    title: "Missing Binary",
    steps: [
      { ko: "apply 단계에서 실행 실패", en: "execution failed during apply" },
      { ko: "런북 · 실행 경로 역추적", en: "traced back through the runbook and paths" },
      { ko: "provider 디렉터리 수정", en: "fixed the provider directory" },
    ],
  },
];

export const closing = {
  awards: [
    { ko: "지방기능경기대회 · 은상", en: "REGIONAL SKILLS · SILVER" } as Bi,
    { ko: "전국기능경기대회 · 장려상", en: "NATIONAL SKILLS · MERIT" } as Bi,
  ],
  line: {
    ko: "아직 완성된 개발자는 아닙니다. 그래서 계속 만들고 있습니다.",
    en: "I am not a finished developer yet. That is why I keep building.",
  } as Bi,
};
