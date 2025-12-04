export type Locale = "tr" | "en" | "es" | "de" | "fr" | "pt-BR" | "ar"

export interface Translations {
  header: {
    features: string
    pricing: string
    providers: string
    login: string
    tryItFree: string
  }
  hero: {
    badge: string
    headline: string
    headlineHighlight: string
    subtext: string
    tryItFree: string
  }
  features: {
    title: string
    description: string
    multiProviderRouting: {
      title: string
      description: string
    }
    automaticFailover: {
      title: string
      description: string
    }
    realTimeAnalytics: {
      title: string
      description: string
    }
    developerFriendly: {
      title: string
      description: string
    }
  }
  howItWorks: {
    title: string
    description: string
    step1: {
      title: string
      description: string
    }
    step2: {
      title: string
      description: string
    }
    step3: {
      title: string
      description: string
    }
    codeExample: {
      filename: string
      comment: string
    }
  }
  pricing: {
    title: string
    description: string
    mostPopular: string
    basic: {
      name: string
      price: string
      period: string
      description: string
      features: string[]
      cta: string
    }
    pro: {
      name: string
      price: string
      period: string
      description: string
      features: string[]
      cta: string
    }
    enterprise: {
      name: string
      price: string
      period: string
      description: string
      features: string[]
      cta: string
    }
  }
  faq: {
    title: string
    description: string
    questions: {
      routing: {
        question: string
        answer: string
      }
      failover: {
        question: string
        answer: string
      }
      existingProviders: {
        question: string
        answer: string
      }
      integration: {
        question: string
        answer: string
      }
      freeTrial: {
        question: string
        answer: string
      }
      analytics: {
        question: string
        answer: string
      }
    }
  }
  footer: {
    description: string
    product: string
    company: string
    legal: string
    links: {
      features: string
      pricing: string
      providers: string
      about: string
      blog: string
      careers: string
      contact: string
      privacy: string
      terms: string
    }
    copyright: string
    privacyPolicy: string
    termsOfService: string
  }
  providers: {
    title: string
    description: string
    countriesSupported: string
    viewAll: string
    more: string
    allProviders: string
    allProvidersDescription: string
    backToHome: string
    searchPlaceholder: string
    filterByStatus: string
    filterByRegion: string
    allStatuses: string
    allRegions: string
    supported: string
    partiallySupported: string
    notSupportedYet: string
    resultsCount: string
    noResults: string
    tabs: {
      all: string
      popular: string
      regions: string
    }
  }
  dashboard: {
    messagesSent: string
    deliveryRate: string
    activeProviders: string
    avgLatency: string
    messageVolume: string
    providerStatus: string
    routingRules: string
    active: string
    enabled: string
    costOptimization: string
    geoRouting: string
    failover: string
  }
  privacy: {
    title: string
    lastUpdated: string
    backToHome: string
    sections: Array<{
      title: string
      content: string[]
    }>
  }
  terms: {
    title: string
    lastUpdated: string
    backToHome: string
    sections: Array<{
      title: string
      content: string[]
    }>
  }
  contact: {
    title: string
    description: string
    backToHome: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    sending: string
    successMessage: string
    errorMessage: string
    emailInfo: string
  }
}

