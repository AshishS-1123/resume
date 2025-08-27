const sectionHeading = (heading) => ({
  text: heading,
  fontSize: 14,
  bold: true,
  marginTop: 8,
});

const sectionSubHeading = (first, second) => ({
  marginTop: 6,
  marginBottom: 4,
  columns: [
    { text: first, width: '*', fontSize: 12, bold: true },
    { text: second, width: 'auto' },
  ],
});

const sectionSubSubHeading = (heading) => ({
  text: heading,
  bold: true,
  marginTop: 4,
  marginBottom: 4,
});

const listItems = (listItems = []) => ({
  ul: listItems.map(item => ({
    text: item,
  })),
});

const header = {
  columns: [
    {
      width: '*',
      stack: [
        { text: 'Ashish Shevale', fontSize: 16 },
        { text: 'Flutter Developer | MERN Stack Developer', fontSize: 11 },
      ],
    },
    {
      width: 'auto',
      stack: [
        { text: 'shevaleashish@gmail.com', alignment: 'right' },
        { text: 'linkedin.com/in/ashish-shevale', alignment: 'right' },
        { text: '+91-7447354182', alignment: 'right' },
      ],
    }
  ],
};

const skills = {
  stack: [
    sectionHeading('Skills'),
    {
      text: 'Dart, Flutter, BLoC, Drift, SQLite, GoRouter, Protocol Buffers, React, PostgreSQL, Node.js, Express, Redux, TDD, Jest, Enzyme, RESTful APIs, GraphQL, Git',
    }
  ],
};

const workExperience = {
  stack: [
    sectionHeading('Work Experience'),
    sectionSubHeading('Fullstack Developer - Tata Consultancy Services', `August 2022 - Present (${Number((((new Date().getFullYear() - 2022) * 12 + (new Date().getMonth() - 8 + 1)) / 12).toFixed(1))} Years)`),
    sectionSubSubHeading('Day to Day Responsibilities'),
    listItems([
      'Worked on a project management SPA built using React, Node, PostgreSQL and GraphQL for users to track different aspects of their factories using KPIs, graphs, tables and reports.',
      // 'Built complex workfows to enable users to take action against low KPIs and analyze trends & patterns. Generated automated Excel and PDF reports for business meetings.',
      // 'Collaborated closely with business analysts, end-users and other stakeholders to deliver features and obtain feedback.',
      'Conceptualized and delivered 15+ comprehensive dashboards, often developing both front-end and back-end.',
      'Optimized the performance of SQL queries and developed multiple back-end stories.',
      // 'Designed and maintained a suite of reusable React components.',
      // 'Conducted in-depth exploration of npm libraries like pdfmake, victory & xlsx to develop POCs for critical features.',
      'Mentored junior developers on the codebase and requirements, while conducting in-depth code reviews to enforce coding standards, validate database/API design, and catch logical issues.',
    ]),
    sectionSubSubHeading('Performance Improvements and Code Refactors'),
    listItems([
      'Migrated UI and API codebase and dependencies from Node 8 to 12, and later to Node 20. Also migrated the Jenkins pipeline and reduced deployment time from 30 minutes to 12 minutes.',
      'Implemented route-based code splitting and optimized caching with a service worker (Workbox), reducing page load time by 84%.',
      'Used SQL operations, AWS S3 and cron jobs to pre-generate reports to reduce download time from 6 minutes to 2 seconds.',
      'Led the redesign efforts for a dashboard by creating components with unit tests and applying Test Driven',
      'Development. Refactoring and code reuse reduced development time by 24 days.',
    ]),
    sectionSubSubHeading('Awards and Recognition'),
    listItems([
      'Recognized with the Star of the Quarter Award.',
      'Received the highest rating in two appraisals.',
      'Participated in weekly internal coding contests and won ₹1,000 worth of vouchers.',
      'Cleared internal technical and soft-skills assessment in frst attempt.',
    ]),
  ],
};

const projects = {
  stack: [
    sectionHeading('Projects'),
    sectionSubHeading('Moderation - Financial Planner', 'Deployed to Android Play Store'),
    listItems([
      'Built using Flutter, BLoC for state management and Drift & SQLite for storing user data.',
      'Applied Clean Architecture principles to structure the codebase into data layer, abstract repository, repository implementation, service layer, and feature modules.',
      'Used Protocol Buffers to serialize user events to create encrypted data backups.',
      'Built a custom code generator (using source_gen and analyzer) to auto-generate randomized test data for event classes, for validating backup and serialization functionality.',
      'Integrated with Google Cloud APIs (Drive and Sheets) to support encrypted data backup/restore and loading investment data.',
      'Wrote integration tests and database migration tests for backwards compatibility.',
      'Used AdMob to display rewarded ads and RevenueCat for premium subscriptions.',
      'Features Implemented - Budget Planner, Shopping Lists, Data Backup, Habit Tracker, Analytics, Excel Data Import and Liquidity Alerts.'
    ]),
  ],
};

const profiles = {
  stack: [
    sectionHeading('Coding Profiles'),
    sectionSubHeading('GitHub', 'github.com/AshishS-1123'),
    { text: '54 repositories, 4 badges, 60 stars earned and 5 open-source contributions.', marginBottom: 4 },
    sectionSubHeading('Stack Overfow', 'stackoverfow.com/users/14405606/ashish-shevale'),
    { text: 'Answered 30+ questions, 10 badges and 370+ reputation.' },
  ],
};

const education = {
  stack: [
    sectionHeading('Education'),
    sectionSubHeading('B.E. Electronics and Telecommunications', 'CGPA: 9.5'),
    { text: 'Government College of Engineering and Research, Avasari' },
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
    subject: 'Dart,Flutter,SQL,Development,Integration Test,Firebase,Mobile,Widget,dependency injection,apis,libraries,android,ios,bloc,state,provider,getx,Cloud,Play store,App Store,FFI,UI/UX,debugging,bugs,crashes,JavaScript (ES6+), TypeScript, HTML5, CSS3, JQuery, Bootstrap, React.js (17+), React Router, React Query, Material UI, Next.js, Redux, React Toolkit, Test Driven Development, TDD/BDD, Unit test, Jasmine, Jest, REST, RESTful APIs, GraphQL, Mongo DB, PostgreSQL, Sqlite, NoSQL, SQL, MERN, PERN, MEAN, Webpack, Babel, Tailwind, SASS, SCSS Lazy Loading, Memoization, Component Optimization, GitHub Actions, Jenkins, CI/CD, AWS, Azure, Git, JWT, OAuth, SSO, SAML, Authentication, Authorization, Bug free, User Experience, Quality Standards, Documentation, Best practices, frontend development, backend development, architectural and design skills, frontend libraries, DOM manipulation, Reusability, Microservices, latest technologies, cross-functional teams, Agile,',
    keywords: 'Dart,Flutter,SQL,Development,Integration Test,Firebase,Mobile,Widget,dependency injection,apis,libraries,android,ios,bloc,state,provider,getx,Cloud,Play store,App Store,FFI,UI/UX,debugging,bugs,crashes,JavaScript (ES6+), TypeScript, HTML5, CSS3, JQuery, Bootstrap, React.js (17+), React Router, React Query, Material UI, Next.js, Redux, React Toolkit, Test Driven Development, TDD/BDD, Unit test, Jasmine, Jest, REST, RESTful APIs, GraphQL, Mongo DB, PostgreSQL, Sqlite, NoSQL, SQL, MERN, PERN, MEAN, Webpack, Babel, Tailwind, SASS, SCSS Lazy Loading, Memoization, Component Optimization, GitHub Actions, Jenkins, CI/CD, AWS, Azure, Git, JWT, OAuth, SSO, SAML, Authentication, Authorization, Bug free, User Experience, Quality Standards, Documentation, Best practices, frontend development, backend development, architectural and design skills, frontend libraries, DOM manipulation, Reusability, Microservices, latest technologies, cross-functional teams, Agile,',
  },
  pageSize: 'A4',
  pageMargins: [16, 16, 16, 16],
  defaultStyle: {
    fontSize: 11,
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
    profiles,
    education,
  ],
};

pdfMake.createPdf(docDef).open();