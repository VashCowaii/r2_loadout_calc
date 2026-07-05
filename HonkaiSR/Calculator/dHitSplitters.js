const hitSplitters = {
  //ABUNDANCE
  "Huohuo": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Luocha": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Bailu": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Natasha": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "basic2": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": null,
        "scalarOverride": "HP"
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Gallagher": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Lynx": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },

  //HARMONY
  "Robin": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.34,
          "energyRatio": 0.34,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Sunday": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Tribbie": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 5,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Bronya": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Tingyun": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Asta": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Ruan Mei": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Sparkle": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Trailblazer - Harmony": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,//first hit double toughness bc trace, not eidolon
          "target": "primary"
        },
      }
    ],
  },
  "Hanya": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
      }
    ],
  },

  //DESTRUCTION
  "Saber": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba2": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba3": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
        "perHitMultiOverride": null
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.7,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 40,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ]
  },
  "Blade": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.34,
          "energyRatio": 0.34,
          "toughness": 10,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Jingliu": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill2": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.5,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill2E1": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": 0.8
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": 0.8
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": 0.8
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": 0.8
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.5,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.5,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": 0.8,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ultE1": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "primary"
        },
        "perHitMultiOverride": 0.8,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Firefly": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "toughness": 15,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.4,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.6,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "es": [
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.15,
          "toughness": 15,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.4,
          "toughness": 15,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Dan Heng • Imbibitor Lunae": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.34,
          "energyRatio": 0.34,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba2": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.5,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 30,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.5,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba3": [
      {
        "target": {
          "hitRatio": 0.142,
          "energyRatio": 0.142,
          "toughness": 40,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.142,
          "energyRatio": 0.142,
          "toughness": 40,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.142,
          "energyRatio": 0.142,
          "toughness": 40,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.142,
          "energyRatio": 0.142,
          "toughness": 40,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 20,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.142,
          "energyRatio": 0.142,
          "toughness": 40,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 20,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.142,
          "energyRatio": 0.142,
          "toughness": 40,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 20,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.148,
          "energyRatio": 0.148,
          "toughness": 40,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 20,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.3,
          "toughness": 20,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.3,
          "toughness": 20,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.4,
          "toughness": 20,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Clara": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        }
      },
    ],
    "skill2": [
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
      },
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
      }
    ],
  },
  "Hook": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill2": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Xueyi": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 40,
          "target": "primary"
        },
      }
    ],
    "passive": [],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
      }
    ]
  },

  //ERUDITION
  "Argenti": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult2": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Anaxa": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Jing Yuan": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.45,
          "energyRatio": 0.45,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.55,
          "energyRatio": 0.55,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": []
  },
  "Himeko": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.40,
          "energyRatio": 0.40,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.60,
          "energyRatio": 0.60,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "blast"
        },
      },
      {
        "target": {
          "hitRatio": 0.05,
          "energyRatio": 0.05,
          "toughness": 20,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.05,
          "energyRatio": 0.05,
          "toughness": 20,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.05,
          "energyRatio": 0.05,
          "toughness": 20,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.05,
          "energyRatio": 0.05,
          "toughness": 20,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.6,
          "energyRatio": 0.7,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        // "isSourceLastHit": true,
        // "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ]
  },

  //REMEMBRANCE
  "Aglaea": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ebaMemo": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20/2,
          "target": "primary"
        },
        "isMemo": true,
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10/2,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 5,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 5,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.5,
          "toughness": 5,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Trailblazer - Remembrance": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ebaMemo": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 5,
          "target": "all"
        },
        "isMemo": true,
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 20,
          "target": "all"
        },
        "isMemo": true,
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": null,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Cyrene": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      },
      {
        "subTarget": {
          "hitRatio": 0.30,
          "energyRatio": 0.30,
          "toughness": 5,
          "target": "all"
        },
      },
      {
        "subTarget": {
          "hitRatio": 0.70,
          "energyRatio": 0.70,
          "toughness": 5,
          "target": "all"
        },
      }
    ],
    "memoSkill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
      }
    ]
  },
  "Evernight": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 30,
          "target": "all"
        },
        "isMemo": true,
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill2": [
      {
        "subTarget": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "blastAOE"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Hyacine": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Castorice": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.8,
          "energyRatio": 0.8,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "es": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "esMemo": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isMemo": true,
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill2": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill3": []
  },

  //PRESERVATION
  "Aventurine": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": []
  },
  "Dan Heng • Permansor Terrae": {
    "basic": [
      {
        "target": {
          "target": "primary",
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "target": "primary",
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "target": "all",
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "passive": [
      {
        "target": {
          "target": "all",
          "hitRatio": 0.25,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "target": "all",
          "hitRatio": 0.25,
          "toughness": 20
        }
      },
      {
        "target": {
          "target": "all",
          "hitRatio": 0.25,
          "toughness": 20
        }
      },
      {
        "target": {
          "target": "all",
          "hitRatio": 0.25,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
  },
  "March 7th - Preservation": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "all"
        },
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20,
          "target": "all"
        },
      },
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ]
  },

  //NIHILITY
  "Kafka": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Hysilens": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Black Swan": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Silver Wolf": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Welt": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.9,
          "energyRatio": 0.9,
          "toughness": 20,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Pela": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Acheron": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.1,
          "toughness": 10,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.7,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "rain": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 5,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 5,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "rain2": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 5,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 5,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 5,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "rain3": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "stygian": [
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 5,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.9,
          "energyRatio": 0.9,
          "toughness": 5,
          "target": "all"
        }
      }
    ],
    "rainPost": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Mortenax Blade": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult2": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "The Dahlia": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 10,
          "target": "blast"
        },
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
      }
    ],
  },

  //HUNT
  "Topaz & Numby": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill2": [
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.3,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 1/7,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive2": [
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.3,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Archer": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.35,
          "energyRatio": 0.35,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.35,
          "energyRatio": 0.35,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.44,
          "energyRatio": 0.44,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Seele": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Dr. Ratio": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Feixiao": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.20,
          "energyRatio": 0.20,
          "toughness": 10,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.20,
          "energyRatio": 0.20,
          "toughness": 10,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.60,
          "energyRatio": 0.60,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.34,
          "energyRatio": 0.34,
          "toughness": 20,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 20,
          "target": "primary"
        },
      },
      {
        "target": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 20,
          "target": "primary"
        },
      }
    ],
    "passive": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5,
          "target": "primary"
        },
      }
    ],
    "passiveE4": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 0,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ultSlash": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5,
          "target": "primary"
        },
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 30,
          "target": "all"
        },
      }
    ],
    "tech2": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 0,
          "target": "all"
        },
      }
    ]
  },

  //ELATION
  "Yao Guang": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 5,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 5,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 5,
          "target": "blast"
        }
      },
      {
        "target": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 0.25,
          "toughness": 5,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "elation": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ]
  },
  "Sparxie": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 5,
          "target": "blast"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "elation": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 6.666666666666667,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Trailblazer - Elation": {
    "basic": [
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "elation": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Silver Wolf LV.999": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "basicEnh": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ultLoot": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "all"
        }
      }
    ],
    "ultLootSpin": [
      {
        "target": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "all"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "toughness": 10,
          "target": "all"
        }
      }
    ],
    "elation2": [],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Evanescia": {
    "basic": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20,
          "target": "primary"
        }
      },
      {
        "target": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 20,
          "target": "primary"
        },
        "subTarget": {
          "hitRatio": 1,
          "toughness": 10,
          "target": "blast"
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "fua": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      }
    ],
    "elation": [
      {
        "target": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "target": {
          "hitRatio": 1,
          "toughness": 20,
          "target": "all"
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  }
}

//just what I wrote to convert the old hitsplits into the new ones,
//will leave this here in case I ever tweak them again, for shits

// const newTestObjectSplits = {};
// const defaultTargets = {
//   all: "target",
//   blast: "subTarget",
//   primary: "target",
//   blastAOE: "subTarget",
// }


// for (let charKey in hitSplitters) {
//   const newcharSlot = newTestObjectSplits[charKey] ??= {};
//   const currentChar = hitSplitters[charKey];
//   // console.log(charKey)

//   for (let actionKey in currentChar) {
//     const currentAction = currentChar[actionKey];
//     const newactionSlot = newcharSlot[actionKey] ??= [];
//     // console.log(actionKey)

//     for (let hitSplitObject of currentAction) {
//       let newHitSplitObject = {};
//       for (let innerKey in hitSplitObject) {
//         const currentValue = hitSplitObject[innerKey];
  
//         if (currentValue != undefined && typeof currentValue === "object") {
//           const convertedKey = defaultTargets[innerKey];

//           currentValue.target = innerKey
  
//           newHitSplitObject[convertedKey] = currentValue;
//         }
//         else {
//           newHitSplitObject[innerKey] = currentValue;
//         }
        
//       }
//       newactionSlot.push(newHitSplitObject)
//     }

    
//   }
// }

// console.log(newTestObjectSplits)