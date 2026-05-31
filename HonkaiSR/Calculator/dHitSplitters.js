const hitSplitters = {
    
  //ABUNDANCE
  "Huohuo": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Luocha": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.4,
          "energyRatio": 0.4,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
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
  },
  "Natasha": {//DONE
    "basic": [
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
    "basic2": [
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 0,
            "toughness": 0
        },
        "perHitMultiOverride": null,
        "scalarOverride": "HP",
      },
    ],
    "tech": [
      {
        "all": {
            "hitRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Gallagher": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 30
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 30
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Lynx": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
  },

  //HARMONY
  "Robin": {//DONE
    "basic": [
      {
        "primary": {
            "hitRatio": 0.33,
            "energyRatio": 0.33,
            "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
            "hitRatio": 0.33,
            "energyRatio": 0.33,
            "toughness": 10
        }
      },
      {
        "primary": {
            "hitRatio": 0.34,
            "energyRatio": 0.34,
            "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Sunday": {//DONE
    "basic": [
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Tribbie": {//DONE
    "basic": [
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 10
        },
        "blast": {
            "hitRatio": 1,
            "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "all": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Bronya": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Tingyun": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Asta": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      }
    ],
  },
  "Ruan Mei": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Sparkle": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },

  //DESTRUCTION
  "Saber": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [//>2 enemies
      {
        "all": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "all": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba2": [//===2 enemies
      {
        "all": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0
        },
      },
      {
        "all": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba3": [//===1 enemy
      {
        "all": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0
        },
        "perHitMultiOverride": null
      },
      {
        "all": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.7,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 40
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
    ]
  },
  "Blade": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "all": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "all": {
          "hitRatio": 0.33,
          "energyRatio": 0.33,
          "toughness": 10
        }
      },
      {
        "all": {
          "hitRatio": 0.34,
          "energyRatio": 0.34,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Jingliu": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
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
    "skill2": [
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.2,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill2E1": [
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
      {
        "primary": {
          "hitRatio": 0.10,
          "toughness": 0
        },
        "perHitMultiOverride": 0.80,
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.10,
          "toughness": 0
        },
        "perHitMultiOverride": 0.80,
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.10,
          "toughness": 0
        },
        "perHitMultiOverride": 0.80,
      },
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.2,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.20,
          "toughness": 0
        },
        "perHitMultiOverride": 0.80,
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.5,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.50,
          "toughness": 0
        },
        "perHitMultiOverride": 0.80,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ultE1": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0
        },
        "perHitMultiOverride": 0.80,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
  },
  "Firefly": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 15
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 15
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 15
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 15
        }
      },
      {
        "primary": {
          "hitRatio": 0.4,
          "toughness": 15
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 0.4,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.6,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "es": [
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 30
        },
        "blast": {
          "hitRatio": 0.15,
          "toughness": 15
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 30
        },
        "blast": {
          "hitRatio": 0.15,
          "toughness": 15
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 30
        },
        "blast": {
          "hitRatio": 0.15,
          "toughness": 15
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "toughness": 30
        },
        "blast": {
          "hitRatio": 0.15,
          "toughness": 15
        }
      },
      {
        "primary": {
          "hitRatio": 0.4,
          "toughness": 30
        },
        "blast": {
          "hitRatio": 0.4,
          "toughness": 15
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Hook": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
    "skill2": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 30
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 30
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "tech": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },

  //ERUDITION
  "Argenti": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      }
    ],
    "skill": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
    "ult2": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Anaxa": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      },
    ],
  },

  //REMEMBRANCE
  "Aglaea": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 10
        },
        "isSourceLastHit": true
      },
      {
        "primary": {
          "hitRatio": 1,
          "toughness": 10
        },
        "isMemo": true,
        "blast": {
          "hitRatio": 1,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true,
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 5
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 5
        }
      },
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.5,
          "toughness": 5
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Trailblazer - Remembrance": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "eba": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10/2
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true
      },
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 10/2
        },
        "isMemo": true,
        "isSourceFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 20
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
        "all": {
          "hitRatio": 1,
          "toughness": null
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Evernight": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 30
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
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill2": [
      {
        "blastAOE": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
  },
  "Hyacine": {//DONE
    "basic": [
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "memoSkill": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },

  //PRESERVATION
  "Aventurine": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      // {
      //   "bounce": {
      //     "hitRatio": 1,
      //     "energyRatio": 1,
      //     "toughness": 3.3333333333333335
      //   },
      //   "isSourceFirstHit": true,
      //   "isAttackFirstHit": true,
      //   "isSourceLastHit": true,
      //   "isAttackLastHit": true
      // }
    ]
  },
  "Dan Heng • Permansor Terrae": {//DONE
    "basic": [
      {
        "primary": {
            "hitRatio": 0.3,
            "energyRatio": 0.3,
            "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
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
        "all": {
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
        "all": {
            "hitRatio": 0.25,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "all": {
            "hitRatio": 0.25,
            "toughness": 20
        }
      },
      {
        "all": {
            "hitRatio": 0.25,
            "toughness": 20
        }
      },
      {
        "all": {
            "hitRatio": 0.25,
            "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
  },
  

  //NIHILITY
  "Kafka": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "primary": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.15,
          "energyRatio": 0.15,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Hysilens": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Silver Wolf": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
            "hitRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Welt": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      }
    ],
    "ult": [
      {
        "all": {
            "hitRatio": 0.10,
            "energyRatio": 0.10,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
      {
        "all": {
            "hitRatio": 0.9,
            "energyRatio": 0.9,
            "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Pela": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Black Swan": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Acheron": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 0.7,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "rain": [
      {
        "primary": {
          "hitRatio": 0.50,
          "energyRatio": 0.50,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.50,
          "energyRatio": 0.50,
          "toughness": 5
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "rain2": [
      {
        "primary": {
          "hitRatio": 0.30,
          "energyRatio": 0.30,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.30,
          "energyRatio": 0.30,
          "toughness": 5
        },
      },
      {
        "primary": {
          "hitRatio": 0.40,
          "energyRatio": 0.40,
          "toughness": 5
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "rain3": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "stygian": [
      {
        "all": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
      {
        "all": {
          "hitRatio": 0.9,
          "energyRatio": 0.9,
          "toughness": 5
        },
      }
    ],
    "rainPost": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },

  //HUNT
  "Topaz & Numby": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill2": [
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.3,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
      },
      {
        "primary": {
            "hitRatio": 1/7,
            "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "passive2": [
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "toughness": 20
        }
      },
      {
        "primary": {
          "hitRatio": 0.3,
          "toughness": 20
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Archer": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.35,
          "energyRatio": 0.35,
          "toughness": 10
        }
      },
      {
        "primary": {
          "hitRatio": 0.35,
          "energyRatio": 0.35,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.04,
          "energyRatio": 0.04,
          "toughness": 30
        }
      },
      {
        "primary": {
          "hitRatio": 0.44,
          "energyRatio": 0.44,
          "toughness": 30
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "passive": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ]
  },
  "Seele": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.3,
          "energyRatio": 0.3,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.7,
          "energyRatio": 0.7,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 0.2,
          "energyRatio": 0.2,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.1,
          "energyRatio": 0.1,
          "toughness": 10
        },
      },
      {
        "primary": {
          "hitRatio": 0.6,
          "energyRatio": 0.6,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "primary": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Dr. Ratio": {//
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "primary": {
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
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ult": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 30
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "primary": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },

  //ELATION
  "Yao Guang": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 5
        }
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 5
        }
      },
      {
        "primary": {
          "hitRatio": 0.25,
          "energyRatio": 0.25,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 0.25,
          "toughness": 5
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "elation": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
    ]
  },
  "Sparxie": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "eba": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 5
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ult": [
      {
        "primary": {
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
    "elation": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20/3,//6.6666666
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 0,
          "toughness": 0
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Trailblazer - Elation": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true
      },
      {
        "primary": {
          "hitRatio": 0.5,
          "energyRatio": 0.5,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "all": {
            "hitRatio": 1,
            "energyRatio": 1,
            "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "elation": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        // "isSourceFirstHit": true,
        // "isAttackFirstHit": true
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ]
  },
  "Silver Wolf LV.999": {
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "basicEnh": [
      {
        "all": {
          "hitRatio": 1,
          // "energyRatio": 1,
          "toughness": 10
        },
        // "isSourceFirstHit": true,
        // "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ultLoot": [
      {
        "all": {
          "hitRatio": 1,
          // "energyRatio": 1,
          "toughness": 10
        },
        // "isSourceFirstHit": true,
        // "isAttackFirstHit": true,
        // "isSourceLastHit": true,
        // "isAttackLastHit": true
      }
    ],
    "ultLootSpin": [
      {
        "all": {
          "hitRatio": 0.2,
          // "energyRatio": 1,
          "toughness": 10
        },
      },
      {
        "all": {
          "hitRatio": 0.2,
          // "energyRatio": 1,
          "toughness": 10
        },
      },
      {
        "all": {
          "hitRatio": 0.2,
          // "energyRatio": 1,
          "toughness": 10
        },
      },
      {
        "all": {
          "hitRatio": 0.2,
          // "energyRatio": 1,
          "toughness": 10
        },
      },
      {
        "all": {
          "hitRatio": 0.2,
          // "energyRatio": 1,
          "toughness": 10
        },
      },
    ],
    "elation2": [
      // {
      //   "primary": {
      //     "hitRatio": 0,
      //     "energyRatio": 0,
      //     "toughness": 0
      //   },
      //   "isSourceFirstHit": true,
      //   "isAttackFirstHit": true,
      //   // "isSourceLastHit": true,
      //   // "isAttackLastHit": true
      // }
    ],
    "tech": [
      {
        "primary": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
  "Evanescia": {//DONE
    "basic": [
      {
        "primary": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "skill": [
      {
        "primary": {
          "hitRatio": 0.20,
          "energyRatio": 0.20,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
      },
      {
        "primary": {
          "hitRatio": 0.20,
          "energyRatio": 0.20,
          "toughness": 20
        },
      },
      {
        "primary": {
          "hitRatio": 0.20,
          "energyRatio": 0.20,
          "toughness": 20
        },
      },
      {
        "primary": {
          "hitRatio": 0.40,
          "energyRatio": 0.40,
          "toughness": 20
        },
        "blast": {
          "hitRatio": 1,
          "toughness": 10
        },
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "fua": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 10
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      },
    ],
    "ult": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        // "isSourceLastHit": true,
        // "isAttackLastHit": true
      }
    ],
    "elation": [
      {
        "all": {
          "hitRatio": 1,
          "energyRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
    "tech": [
      {
        "all": {
          "hitRatio": 1,
          "toughness": 20
        },
        "isSourceFirstHit": true,
        "isAttackFirstHit": true,
        "isSourceLastHit": true,
        "isAttackLastHit": true
      }
    ],
  },
}