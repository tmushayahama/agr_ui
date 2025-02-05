export const HELP_EMAIL = 'help@alliancegenome.org';
export const SEARCH_API_ERROR_MESSAGE = `There was a problem connecting to the server. Please refresh the page. If you continue to see this message, please contact ${HELP_EMAIL}`;
export const LARGE_COL_CLASS = 'col-md-8 col-12';
export const SMALL_COL_CLASS = 'col-md-4 col-12';

/* Wordpress REST API connection setting */
export const WORDPRESS_REST_API_BASE = 'https://public-api.wordpress.com/wp/v2/sites/alliancegenome.wordpress.com';
export const WORDPRESS_PAGE_BASE_URL = WORDPRESS_REST_API_BASE + '/pages?slug=';
export const WORDPRESS_POST_BASE_URL = WORDPRESS_REST_API_BASE + '/posts';
export const WORDPRESS_POST_URL = WORDPRESS_POST_BASE_URL + '?slug=';
export const WARNING_BANNER_SLUG = 'warning-banner';

//the order in this array matters for the category icons
export const CATEGORIES = [
  {
    name: 'all',
    displayName: 'All'
  },
  {
    name: 'gene',
    displayName: 'Gene',
    displayFields: ['name', 'synonyms', 'primaryKey', 'biotype'],
  },
  {
    name: 'go',
    displayName: 'Gene Ontology',
    displayFields: ['primaryKey', 'collapsible_synonyms', 'branch']
  },
  {
    name: 'disease',
    displayName: 'Disease',
    displayFields: ['primaryKey', 'definition'],
  },
  {
    name: 'allele',
    displayName: 'Allele/Variant',
    displayFields: ['primaryKey','genes', 'synonyms','variantType','molecularConsequence', 'diseases', 'variantName'],
  },
  {
    name: 'model',
    displayName: 'Model',
    displayFields: ['primaryKey','synonyms'],
  },
  {
    name: 'dataset',
    displayName: 'HTP Dataset Index',
    displayFields: ['dataProviderNote', 'idCollection', 'tags', 'summary']
  },
];

export const NON_HIGHLIGHTED_FIELDS = [
  'sourceHref',
  'href',
  'category',
  'homologs',
  'paralogs',
  'primaryKey',
  'orthologs',
  'homologs.symbol',
  'homologs.panther_family'
];

//show these fields in both the highlight section and their normal spot
export const DUPLICATE_HIGHLIGHTED_FIELDS = [
  'crossReferences',
  'synonyms'
];

export const NAV_MENU = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Data and Tools',
    sub: [
      {
        label: 'Downloads',
        route: '/downloads',
      },
      {
        label: 'API',
        route: '/api/swagger-ui',
      },
      {
        label: 'Tools and Prototypes',
        route: '/prototypes',
      },
      {
        label: 'AllianceMine',
        route: '/bluegenes',
      },
      {
        label: 'JBrowse',
        route: '/jbrowse/',
      }
    ]
  },
  {
    label: 'Members',
    sub: [
      {
        label: 'FlyBase',
        shortLabel: 'FlyBase',
        route: '/members/flybase'
      },
      {
        label: 'Mouse Genome Database',
        shortLabel: 'MGD',
        route: '/members/mgd'
      },
      {
        label: 'Rat Genome Database',
        shortLabel: 'RGD',
        route: '/members/rgd'
      },
      {
        label: 'Saccharomyces Genome Database',
        shortLabel: 'SGD',
        route: '/members/sgd'
      },
      {
        label: 'WormBase',
        shortLabel: 'WormBase',
        route: '/members/wormbase'
      },
      {
        label: 'Xenbase',
        shortLabel: 'Xenbase',
        route: 'https://www.xenbase.org/'
      },
      {
        label: 'Zebrafish Information Network',
        shortLabel: 'ZFIN',
        route: '/members/zfin'
      },
      {
        label: 'Gene Ontology Consortium',
        shortLabel: 'GOC',
        route: '/members/goc'
      }
    ]
  },
  {
    label: 'News',
    sub: [
      {
        label: 'News and Events',
        route: '/news'
      },
      {
        label: 'Release Notes',
        route: '/release-notes'
      }
    ]
  },
  {
    label: 'About',
    sub: [
      {
        label: 'About Us',
        route: '/about-us',
      },
      {
        label: 'Funding',
        route: '/funding'
      },
      {
        label: 'Organization and Governance',
        route: '/organization-and-governance'
      },
      {
        label: 'Privacy, Warranty, and Licensing',
        route: '/privacy-warranty-licensing'
      },
      {
        label: 'Publications',
        route: '/publications',
      }
    ]
  },
  {
    label: 'Working Groups',
    route: '/working-groups',
  },
  {
    label: 'Help',
    sub: [
      {
        label: 'FAQ / Known Issues',
        route: '/faq'
      },
      {
        label: 'Glossary',
        route: '/glossary'
      },
      {
        label: 'Tutorials',
        route: '/tutorials'
      },
      {
        label: 'User Documentation',
        route: '/help'
      },
    ]
  },
  {
    label: 'Community',
    sub: [
      {
        label: 'Alliance User Community',
        route: 'https://community.alliancegenome.org/categories',
      },
      {
        label: 'Twitter',
        route: 'https://twitter.com/alliancegenome',
      }
    ]
  },
  {
    label: 'Contact Us',
    route: '/contact-us',
  }
];

export const DEFAULT_TABLE_STATE = {
  page: 1,
  sizePerPage: 10,
  sort: '',
  filters: {},
};

export const SPECIES = [
  {
    taxonId: 'NCBITaxon:9606',
    fullName: 'Homo sapiens',
    shortName: 'Hsa',
    apolloName: 'human',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Homo sapiens',
    vertebrate: true,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:10090',
    fullName: 'Mus musculus',
    shortName: 'Mmu',
    apolloName: 'mouse',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Mus musculus',
    vertebrate: true,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:10116',
    fullName: 'Rattus norvegicus',
    shortName: 'Rno',
    apolloName: 'rat',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Rattus norvegicus',
    vertebrate: true,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:8355',
    fullName: 'Xenopus laevis',
    shortName: 'Xla',
    apolloName: 'x_laevis',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Xenopus laevis',
    vertebrate: true,
    enableSingleCellExpressionAtlasLink: false,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:8364',
    fullName: 'Xenopus tropicalis',
    shortName: 'Xtr',
    apolloName: 'x_tropicalis',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Xenopus tropicalis',
    vertebrate: true,
    enableSingleCellExpressionAtlasLink: false,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:7955',
    fullName: 'Danio rerio',
    shortName: 'Dre',
    apolloName: 'zebrafish',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Danio rerio',
    vertebrate: true,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:7227',
    fullName: 'Drosophila melanogaster',
    shortName: 'Dme',
    apolloName: 'fly',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Drosophila melanogaster',
    vertebrate: false,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:6239',
    fullName: 'Caenorhabditis elegans',
    shortName: 'Cel',
    apolloName: 'worm',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Caenorhabditis elegans',
    vertebrate: false,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:559292',
    fullName: 'Saccharomyces cerevisiae',
    shortName: 'Sce',
    apolloName: 'yeast',
    apolloTrack: '/All%20Genes/',
    jBrowseName: 'Saccharomyces cerevisiae',
    vertebrate: false,
    enableSingleCellExpressionAtlasLink: true,
    enableOrthologComparison: true,
  },
  {
    taxonId: 'NCBITaxon:2697049',
    fullName: 'Severe acute respiratory syndrome coronavirus 2',
    shortName: 'SARS-CoV-2',
    apolloName: 'SARS-CoV-2',
    apolloTrack: '/Mature%20peptides/',
    jBrowseName: 'SARS-CoV-2',
    suppressFlatten: true,
    vertebrate: false,
    enableSingleCellExpressionAtlasLink: false,
    enableOrthologComparison: false,
    geneSynopsisProvider: 'UniProt',
  }
];

export const TAXON_ORDER = SPECIES.map(s => s.taxonId);

export const SPECIES_NAME_ORDER = SPECIES.map(s => s.fullName);

export const GA_PROPERTY_ID = 'UA-98765810-1';

export const GA_EVENT_CATEGORY = {
  AUTOCOMPLETE: 'Autocomplete',
  TABLE: 'Table',
};

export const GA_EVENT_ACTION = {
  GO_TO_PAGE: 'Go to page',
  GO_TO_SEARCH_RESULTS: 'Go to search results',
  SET_PAGE_SIZE: 'Set page size'
};

