export const ADOBE_CONFIG = {
  CLIENT_ID: '', // Fetched at runtime from backend `/api/config/adobe-embed-key`
  
  // Optional: Configure viewer settings
  VIEWER_SETTINGS: {
    // Document display settings
    defaultViewMode: 'FIT_WIDTH', 
    defaultZoom: 1.2, 
    
    // Tool visibility settings
    showDownloadPDF: true,
    showPrintPDF: true,
    showLeftHandPanel: false,
    showAnnotationTools: true,
    showBookmarks: true,
    showThumbnails: true,
    showSecondaryToolbar: true,
    showFindBar: true,
    showPageControls: true,
    showZoomControl: true,
    showFullScreen: true,
    showPageNavOverlay: true,
    showAnnotationRuler: false,
    showFormFilling: false,
    showBorders: false,
    showPageShadow: false,
    showPageNumber: true,
    showPageLabels: true,
    showToolbar: true,
    enableSearchAPIs: true,
    
    enableFilePreviewEvents: true,
    
    showToolbarControls: {
      pageNav: true,
      zoom: true,
      search: true,
      fullScreen: true, 
      download: true,
      print: true,
      bookmark: true,
      secondaryToolbar: true,
      leftPanel: false,
      rightPanel: false,
    },
  },
};