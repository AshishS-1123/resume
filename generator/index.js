const sectionHeading = (heading) => ({
  text: heading,
  fontSize: 14,
  bold: true,
  marginTop: 8,
});

const sectionSubHeading = (first, second, url) => {
  if ((url || '').length !== 0) {
    return {
    marginTop: 6,
    marginBottom: 4,
    columns: [
      { text: first, width: '*', fontSize: 12, bold: true },
      { text: second, width: 'auto', link: url, color: '#3c51b4' },
    ],
  };
  }

  return {
    marginTop: 6,
    marginBottom: 4,
    columns: [
      { text: first, width: '*', fontSize: 12, bold: true },
      { text: second, width: 'auto' },
    ],
  };
};

const sectionSubSubHeading = (heading) => ({
  text: heading,
  bold: true,
  marginTop: 4,
  marginBottom: 4,
});

const listItems = (listItems = []) => ({
  ul: listItems.map(item => ({
    text: splitBold(item),
  })),
});

const splitBold = (text) => {
  const result = [];
  const regex = /\*\*(.*?)\*\*|([^*]+)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match[1] !== undefined) {
      // Bold text
      result.push({ text: match[1], bold: true });
    } else if (match[2] !== undefined) {
      // Plain text
      const plainText = match[2];
      if (plainText) {
        result.push({ text: plainText, color: '#111' });
      }
    }
  }

  return result;
};

const header = {
  columns: [
    {
      width: '*',
      stack: [
        { text: 'Ashish Shevale', fontSize: 16 },
        { text: 'Full-Stack Developer', fontSize: 11 },
      ],
    },
    {
      width: 'auto',
      stack: [
        { text: 'shevaleashish@gmail.com', alignment: 'right' },
        { text: '+91-7447354182', alignment: 'right' },
        {
          alignment: 'right',
          text: [
            { text: 'LinkedIn', link: 'https://linkedin.com/in/ashish-shevale', color: '#3c51b4' },
            { text: ' | ' },
            { text: 'GitHub', link: 'https://github.com/AshishS-1123', color: '#3c51b4' },
            { text: ' | ' },
            { text: 'StackOverflow', link: 'https://stackoverflow.com/users/14405606/ashish-shevale', color: '#3c51b4' },
          ]
        },
      ],
    },
  ],
};

const skills = {
  stack: [
    sectionHeading('Skills'),
    {
      text: 'Javascript, PostgreSQL, GraphQL, React, REST APIs, AWS (S3, EC2, RDS), CI/CD (Jenkins, GitHub Actions)',
    }
  ],
};

const workExperience = {
  marginTop: 8,
  stack: [
    sectionHeading('Work Experience'),
    sectionSubHeading('Tata Consultancy Services', `August 2022 - Present (${new Date().getFullYear() - 2022} Years)`),
    listItems([
      'Expert Fullstack Developer proficient in PostgreSQL, Node and React.',
      '**Reduced report download time** from 6 minutes to 2 seconds using SQL optimizations and a combination of AWS S3 and cron jobs to pre-generate reports.',
      'Created reusable React components using **Test Driven Development** to redesign a legacy dashboard, **reducing development time by 24 days**.',
      '**Lowered page load time** to less than 3 seconds through route-based code splitting and advanced service-worker caching.',
      '**Mentored junior developers** and conducted in-depth** code reviews** to enforce coding standards, validate database/API design, and catch logical issues.',
      '**Optimized Jenkins CI/CD** pipeline and **reduced deployment time** from 30 minutes to 12 minutes.',
      'Built **data-driven workflows** enabling clients to act on KPI drops and improve operational efficiency.',
      '**Performed code migration** from Node 8 to Node 20 for frontend and backend, including updating dependencies, webpack config and Jenkins pipelines.',
      '**Optimized SQL queries**, developed multiple back-end stories, and maintained a suite of **reusable React components**.',
      'Recognized with the **Star of the Quarter Award**.',
    ]),
  ],
};

const projects = {
  marginTop: 8,
  stack: [
    sectionHeading('Projects'),
    sectionSubHeading('Clickup Clone', 'GitHub (71 Stars, 21 Forks)', 'https://github.com/AshishS-1123/ClickUp-Clone'),
    listItems([
      'Built a clone of the ClickUp project management tool using **Next.js, Express and MongoDB**.',
      'Designed **REST APIs** and hierarchical data model for workspaces, folders and tasks to support nested relationships and querying.',
      'Used **Redux** & ** Thunk**, and **Container-Component** architecture to maintain separation of concerns between UI and data.',
      'Built frontend using reusable **functional components** and **hooks**.',
      'Built backend using **Model-View-Controller** pattern, with reusable middleware for auth, error handling and data validation.',
      'Developed Kanban board for visualizing tasks and drag-and-drop updates.'
    ]),

    sectionSubHeading('Moderation (Financial Planner App)', 'Android Play Store', 'https://play.google.com/store/apps/details?id=com.ashishshevale.moderation'),
    listItems([
      'Owned the **full app lifecycle** - from UI/UX design and feature implementation to automated testing, CI/CD setup and Play Store deployment, ensuring a seamless release process.',
      'Implemented **clean architecture** with modular layers for data, repositories, services, and view to ensure scalability and maintainability.',
      'Built a **custom code generator** (using source_gen and analyzer) to auto-generate randomized data for automated tests.',
      'Wrote **integration tests** and **database migration tests** for backward compatibility across app updates.',
      'Integrated with Google Cloud APIs (Drive and Sheets) to support encrypted data backup and restore',
      'Used **AdMob** (rewarded ads) and **RevenueCat** (monthly subscriptions) for monetization.',
      'Features Implemented - Budget Planner, Shopping Lists, Data Backup, Habit Tracker, Analytics, Excel Data Import, and Liquidity Alerts.'
    ]),
  ],
};


const education = {
  marginTop: 8,
  stack: [
    sectionHeading('Education'),
    sectionSubHeading('B.E. Electronics and Telecommunications (July 2022)', 'CGPA: 9.5 / 10.0'),
    { text: 'Government College of Engineering and Research' },
  ],
};

pdfMake.fonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
  },
};

const docDef = {
  info: {
    title: 'Ashish Shevale - Flutter Developer',
    author: 'Ashish Shevale',
    subject: 'Dart,Flutter,SQL,Development,Integration Test,Firebase,Mobile,Widget,dependency injection,apis,libraries,android,ios,bloc,state,provider,getx,Cloud,Play store,App Store,FFI,UI/UX,debugging,bugs,crashes,JavaScript (ES6+),TypeScript,HTML5,CSS3,JQuery,Bootstrap,React.js (17+),React Router,React Query,Material UI,Next.js,Redux,React Toolkit,Test Driven Development,TDD/BDD,Unit test,Jasmine,Jest,REST,RESTful APIs,GraphQL,Mongo DB,PostgreSQL,Sqlite,NoSQL,SQL,MERN,PERN,MEAN,Webpack,Babel,Tailwind,SASS,SCSS Lazy Loading,Memoization,Component Optimization,GitHub Actions,Jenkins,CI/CD,AWS,Azure,Git,JWT,OAuth,SSO,SAML,Authentication,Authorization,Bug free,User Experience,Quality Standards,Documentation,Best practices,frontend development,backend development,architectural and design skills,frontend libraries,DOM manipulation,Reusability,Microservices,latest technologies,cross-functional teams,Agile,AI,artificial inteligence,langchain,gpt,Gen AI,NLP,Spacy,tensorflow,pytorch,RAG,agent,copilot,MCP,LoRA',
    keywords: 'Dart,Flutter,SQL,Development,Integration Test,Firebase,Mobile,Widget,dependency injection,apis,libraries,android,ios,bloc,state,provider,getx,Cloud,Play store,App Store,FFI,UI/UX,debugging,bugs,crashes,JavaScript (ES6+),TypeScript,HTML5,CSS3,JQuery,Bootstrap,React.js (17+),React Router,React Query,Material UI,Next.js,Redux,React Toolkit,Test Driven Development,TDD/BDD,Unit test,Jasmine,Jest,REST,RESTful APIs,GraphQL,Mongo DB,PostgreSQL,Sqlite,NoSQL,SQL,MERN,PERN,MEAN,Webpack,Babel,Tailwind,SASS,SCSS Lazy Loading,Memoization,Component Optimization,GitHub Actions,Jenkins,CI/CD,AWS,Azure,Git,JWT,OAuth,SSO,SAML,Authentication,Authorization,Bug free,User Experience,Quality Standards,Documentation,Best practices,frontend development,backend development,architectural and design skills,frontend libraries,DOM manipulation,Reusability,Microservices,latest technologies,cross-functional teams,Agile,AI,artificial inteligence,langchain,gpt,Gen AI,NLP,Spacy,tensorflow,pytorch,RAG,agent,copilot,MCP,LoRA',
  },
  pageSize: 'A4',
  pageMargins: [16, 16, 16, 16],
  defaultStyle: {
    fontSize: 12,
  },
  content: [
    header,
    {
      canvas:
        [
          {
            type: 'line',
            x1: 0, y1: 8,
            x2: 564, y2: 8,
            lineWidth: 2,
            color: 'gray'
          },
        ]
    },
    skills,
    workExperience,
    projects,
    // profiles,
    education,
  ],
};

pdfMake.createPdf(docDef).open();