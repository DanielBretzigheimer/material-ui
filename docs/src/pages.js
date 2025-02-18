import findPages from /* preval */ 'docs/src/modules/utils/findPages';

const pages = [
  {
    pathname: '/getting-started',
    children: [
      { pathname: '/getting-started/installation' },
      { pathname: '/getting-started/usage' },
      { pathname: '/getting-started/example-projects' },
      { pathname: '/getting-started/templates' },
      { pathname: '/getting-started/learn' },
      { pathname: '/getting-started/faq', title: 'FAQs' },
      { pathname: '/getting-started/supported-components' },
      { pathname: '/getting-started/supported-platforms' },
      { pathname: '/getting-started/support' },
    ],
  },
  {
    pathname: '/components',
    children: [
      {
        pathname: '/components',
        subheader: '/components/layout',
        children: [
          { pathname: '/components/box' },
          { pathname: '/components/container' },
          { pathname: '/components/grid' },
          { pathname: '/components/grid-list' },
          { pathname: '/components/hidden' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/inputs',
        children: [
          { pathname: '/components/buttons' },
          { pathname: '/components/button-group' },
          { pathname: '/components/checkboxes' },
          { pathname: '/components/floating-action-button' },
          { pathname: '/components/pickers', title: 'Date / Time' },
          { pathname: '/components/radio-buttons' },
          { pathname: '/components/selects' },
          { pathname: '/components/slider' },
          { pathname: '/components/switches' },
          { pathname: '/components/text-fields' },
          { pathname: '/components/transfer-list' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/navigation',
        children: [
          { pathname: '/components/bottom-navigation' },
          { pathname: '/components/breadcrumbs' },
          { pathname: '/components/drawers' },
          { pathname: '/components/links' },
          { pathname: '/components/menus' },
          { pathname: '/components/steppers' },
          { pathname: '/components/tabs' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/surfaces',
        children: [
          { pathname: '/components/app-bar' },
          { pathname: '/components/paper' },
          { pathname: '/components/cards' },
          { pathname: '/components/accordion' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/feedback',
        children: [
          { pathname: '/components/progress' },
          { pathname: '/components/dialogs' },
          { pathname: '/components/snackbars' },
          { pathname: '/components/backdrop' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/data-display',
        children: [
          { pathname: '/components/avatars' },
          { pathname: '/components/badges' },
          { pathname: '/components/chips' },
          { pathname: '/components/dividers' },
          { pathname: '/components/icons' },
          { pathname: '/components/material-icons' },
          { pathname: '/components/lists' },
          { pathname: '/components/tables' },
          { pathname: '/components/tooltips' },
          { pathname: '/components/typography' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/utils',
        children: [
          { pathname: '/components/click-away-listener' },
          { pathname: '/components/css-baseline', title: 'CSS Baseline' },
          { pathname: '/components/modal' },
          { pathname: '/components/no-ssr', title: 'No SSR' },
          { pathname: '/components/popover' },
          { pathname: '/components/popper' },
          { pathname: '/components/portal' },
          { pathname: '/components/textarea-autosize' },
          { pathname: '/components/transitions' },
          { pathname: '/components/use-media-query', title: 'useMediaQuery' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/lab',
        children: [
          { pathname: '/components/about-the-lab' },
          { pathname: '/components/alert' },
          { pathname: '/components/autocomplete' },
          {
            pathname: '/components',
            subheader: '/components/data-grid',
            children: [
              {
                pathname: '/components/data-grid',
                title: 'Overview',
              },
              { pathname: '/components/data-grid/demo' },
              { pathname: '/components/data-grid/getting-started' },
              { pathname: '/components/data-grid/columns' },
              { pathname: '/components/data-grid/rows' },
              { pathname: '/components/data-grid/editing' },
              { pathname: '/components/data-grid/sorting' },
              { pathname: '/components/data-grid/filtering' },
              { pathname: '/components/data-grid/pagination' },
              { pathname: '/components/data-grid/selection' },
              { pathname: '/components/data-grid/rendering' },
              { pathname: '/components/data-grid/export', title: 'Export & Import' },
              { pathname: '/components/data-grid/localization', title: 'Localization' },
              { pathname: '/components/data-grid/group-pivot', title: '🚧 Group & Pivot' },
              { pathname: '/components/data-grid/accessibility' },
            ],
          },
          { pathname: '/components/pagination' },
          { pathname: '/components/rating' },
          { pathname: '/components/skeleton' },
          { pathname: '/components/speed-dial' },
          { pathname: '/components/timeline' },
          { pathname: '/components/toggle-button' },
          { pathname: '/components/tree-view' },
        ],
      },
    ],
  },
  {
    title: 'Component API',
    pathname: '/api-docs',
    children: [
      ...findPages[0].children,
      ...[{ pathname: '/api-docs/data-grid' }, { pathname: '/api-docs/x-grid' }],
    ].sort((a, b) =>
      a.pathname.replace('/api-docs/', '').localeCompare(b.pathname.replace('/api-docs/', '')),
    ),
  },
  {
    pathname: '/styles',
    children: [
      { pathname: '/styles/basics' },
      { pathname: '/styles/advanced' },
      { pathname: '/styles/api', title: 'API' },
    ],
  },
  {
    pathname: '/system',
    children: [
      { pathname: '/system/basics' },
      { pathname: '/system/borders' },
      { pathname: '/system/display' },
      { pathname: '/system/flexbox' },
      { pathname: '/system/palette' },
      { pathname: '/system/positions' },
      { pathname: '/system/shadows' },
      { pathname: '/system/sizing' },
      { pathname: '/system/spacing' },
      { pathname: '/system/typography' },
      { pathname: '/system/api', title: 'API' },
    ],
  },
  {
    pathname: '/customization',
    children: [
      {
        pathname: '/customization',
        subheader: '/customization/theme',
        children: [
          { pathname: '/customization/theming' },
          { pathname: '/customization/palette' },
          { pathname: '/customization/typography' },
          { pathname: '/customization/spacing' },
          { pathname: '/customization/breakpoints' },
          { pathname: '/customization/density' },
          { pathname: '/customization/z-index', title: 'z-index' },
          { pathname: '/customization/globals' },
        ],
      },
      { pathname: '/customization/components' },
      { pathname: '/customization/color' },
      { pathname: '/customization/default-theme', title: 'Default Theme' },
    ],
  },
  {
    pathname: '/guides',
    children: [
      { pathname: '/guides/api', title: 'API Design Approach' },
      { pathname: '/guides/typescript', title: 'TypeScript' },
      { pathname: '/guides/interoperability', title: 'Style Library Interoperability' },
      { pathname: '/guides/minimizing-bundle-size' },
      { pathname: '/guides/composition' },
      { pathname: '/guides/server-rendering' },
      { pathname: '/guides/responsive-ui', title: 'Responsive UI' },
      { pathname: '/guides/migration-v3', title: 'Migration From v3' },
      { pathname: '/guides/migration-v0x', title: 'Migration From v0.x' },
      { pathname: '/guides/testing' },
      { pathname: '/guides/localization' },
      { pathname: '/guides/right-to-left', title: 'Right-to-left' },
      { pathname: '/guides/flow' },
    ],
  },
  {
    pathname: 'https://material-ui.com/store/',
    title: 'Premium themes',
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  {
    pathname: '/discover-more',
    children: [
      { pathname: '/discover-more/showcase' },
      { pathname: '/discover-more/related-projects' },
      { pathname: '/discover-more/roadmap' },
      { pathname: '/discover-more/backers', title: 'Sponsors & Backers' },
      { pathname: '/discover-more/vision' },
      { pathname: '/discover-more/team' },
      { pathname: '/discover-more/changelog' },
      { pathname: '/discover-more/languages' },
    ],
  },
  { pathname: '/versions', disableNav: true },
  { pathname: '/', displayNav: false, disableDrawer: true },
  { pathname: 'https://medium.com/material-ui', title: 'Blog' },
];

export default pages;
