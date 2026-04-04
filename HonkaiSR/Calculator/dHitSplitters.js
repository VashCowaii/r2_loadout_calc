const hitSplitters = {
    
    //ABUNDANCE
    "Huohuo": {//done
        "basic": [
            {
              "primary": {
                "hitRatio": 0.2,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.2,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.2,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.4,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceLastHit": true,
              "isAttackLastHit": true
            }
        ],
    },
    "Luocha": {//done
      "basic": [
        {
          "primary": {
            "hitRatio": 0.3,
            "energyRatio": 1,
            "toughness": 10
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.3,
            "energyRatio": 1,
            "toughness": 10
          }
        },
        {
          "primary": {
            "hitRatio": 0.4,
            "energyRatio": 1,
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
    "Natasha": {//done
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
    "Gallagher": {//done
        "basic": [
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
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
                "energyRatio": 1,
                "toughness": 30
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.15,
                "energyRatio": 1,
                "toughness": 30
              }
            },
            {
              "primary": {
                "hitRatio": 0.6,
                "energyRatio": 1,
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
    "Lynx": {//done
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
    "Robin": {//done
        "basic": [
            {
            "primary": {
                "hitRatio": 0.33,
                "energyRatio": 1,
                "toughness": 10
            },
            "isSourceFirstHit": true,
            "isAttackFirstHit": true
            },
            {
            "primary": {
                "hitRatio": 0.33,
                "energyRatio": 1,
                "toughness": 10
            }
            },
            {
            "primary": {
                "hitRatio": 0.34,
                "energyRatio": 1,
                "toughness": 10
            },
            "isSourceLastHit": true,
            "isAttackLastHit": true
            }
        ]
    },
    "Sunday": {//done
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
    "Tribbie": {//done
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
    "Bronya": {//done
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
    "Tingyun": {//done
        "basic": [
            {
              "primary": {
                "hitRatio": 0.3,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.7,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceLastHit": true,
              "isAttackLastHit": true
            }
        ],
    },
    "Asta": {//done
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
            "energyRatio": 0,
            "toughness": 20
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true,
          "isSourceLastHit": true,
          "isAttackLastHit": true,
        }
      ],
    },
    "Ruan Mei": {
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
    "Sparkle": {
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
    "Saber": {//done
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
              "energyRatio": 1,
              "toughness": 20
            },
            "isSourceFirstHit": true,
            "isAttackFirstHit": true
          },
          {
            "all": {
              "hitRatio": 0.5,
              "energyRatio": 1,
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
              "energyRatio": 1,
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
              "energyRatio": 1,
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
              "energyRatio": 1,
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
              "energyRatio": 1,
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
    "Blade": {
        "basic": [
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
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
                "energyRatio": 1,
                "toughness": 20
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
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
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "all": {
                "hitRatio": 0.33,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "all": {
                "hitRatio": 0.34,
                "energyRatio": 1,
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
    "Jingliu": {
        "basic": [
            {
              "primary": {
                "hitRatio": 0.3,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.7,
                "energyRatio": 1,
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
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 10
            },
            "isSourceFirstHit": true,
            "isAttackFirstHit": true,
          },
          {
            "primary": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.2,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.2,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.5,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.5,
              "energyRatio": 1,
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
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 10
            },
            "isSourceFirstHit": true,
            "isAttackFirstHit": true,
          },
          {
            "primary": {
              "hitRatio": 0.10,
              "energyRatio": 0,
              "toughness": 0
            },
            "perHitMultiOverride": 0.80,
          },
          {
            "primary": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.10,
              "energyRatio": 0,
              "toughness": 0
            },
            "perHitMultiOverride": 0.80,
          },
          {
            "primary": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.1,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.10,
              "energyRatio": 0,
              "toughness": 0
            },
            "perHitMultiOverride": 0.80,
          },
          {
            "primary": {
              "hitRatio": 0.2,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.2,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.20,
              "energyRatio": 0,
              "toughness": 0
            },
            "perHitMultiOverride": 0.80,
          },
          {
            "primary": {
              "hitRatio": 0.5,
              "energyRatio": 1,
              "toughness": 20
            },
            "blast": {
              "hitRatio": 0.5,
              "energyRatio": 1,
              "toughness": 10
            },
          },
          {
            "primary": {
              "hitRatio": 0.50,
              "energyRatio": 0,
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
    "Hook": {//done
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
    "Argenti": {//done
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
    "Anaxa": {//done
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
          "isAttackFirstHit": true
        },
      ],
    },

    //REMEMBRANCE
    "Aglaea": {
        "basic": [
            {
              "primary": {
                "hitRatio": 0.2,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.2,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.6,
                "energyRatio": 1,
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
                "energyRatio": 1,
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
                "energyRatio": 1,
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
                "energyRatio": 1,
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
                "energyRatio": 1,
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
              "energyRatio": 1,
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
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.3,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.1,
                "energyRatio": 1,
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
                "energyRatio": 1,
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
                "energyRatio": 1,
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
    "Trailblazer - Remembrance": {//done
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
                "toughness": 20
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true,
              "isSourceLastHit": true
            },
            {
              "all": {
                "hitRatio": 1,
                "energyRatio": 1,
                "toughness": 10
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
                "toughness": 10
              },
              "isSourceLastHit": true,
              "isAttackLastHit": true
            }
        ],
    },
    "Evernight": {
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
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.1,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.1,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.1,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.1,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
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
    "Hyacine": {
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
    "Aventurine": {
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
    "Dan Heng • Permansor Terrae": {//done
        "basic": [
            {
                "primary": {
                    "hitRatio": 0.3,
                    "energyRatio": 1,
                    "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
            },
            {
                "primary": {
                    "hitRatio": 0.7,
                    "energyRatio": 1,
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
                "isAttackFirstHit": true
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
                }
            },
        ],
    },
    

    //NIHILITY
    "Kafka": {
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
            "energyRatio": 1,
            "toughness": 20
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.3,
            "energyRatio": 1,
            "toughness": 20
          }
        },
        {
          "primary": {
            "hitRatio": 0.5,
            "energyRatio": 1,
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
            "energyRatio": 1,
            "toughness": 10
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.15,
            "energyRatio": 1,
            "toughness": 10
          }
        },
        {
          "primary": {
            "hitRatio": 0.15,
            "energyRatio": 1,
            "toughness": 10
          }
        },
        {
          "primary": {
            "hitRatio": 0.15,
            "energyRatio": 1,
            "toughness": 10
          }
        },
        {
          "primary": {
            "hitRatio": 0.15,
            "energyRatio": 1,
            "toughness": 10
          }
        },
        {
          "primary": {
            "hitRatio": 0.25,
            "energyRatio": 1,
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
    "Hysilens": {
      "basic": [
        {
          "primary": {
            "hitRatio": 0.5,
            "energyRatio": 1,
            "toughness": 10
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.5,
            "energyRatio": 1,
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
    "Silver Wolf": {//done
        "basic": [
            {
              "primary": {
                "hitRatio": 0.25,
                "energyRatio": 1,
                "toughness": 10
              },
              "isSourceFirstHit": true,
              "isAttackFirstHit": true
            },
            {
              "primary": {
                "hitRatio": 0.25,
                "energyRatio": 1,
                "toughness": 10
              }
            },
            {
              "primary": {
                "hitRatio": 0.5,
                "energyRatio": 1,
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
    "Pela": {//done
      "basic": [
        {
          "primary": {
            "hitRatio": 0.5,
            "energyRatio": 1,
            "toughness": 10
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.5,
            "energyRatio": 1,
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
    "Black Swan": {//done
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

    //HUNT
    "Topaz & Numby": {
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
    "Archer": {
      "basic": [
        {
          "primary": {
            "hitRatio": 0.3,
            "energyRatio": 1,
            "toughness": 10
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.35,
            "energyRatio": 1,
            "toughness": 10
          }
        },
        {
          "primary": {
            "hitRatio": 0.35,
            "energyRatio": 1,
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
            "energyRatio": 1,
            "toughness": 30
          },
          "isSourceFirstHit": true,
          "isAttackFirstHit": true
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.04,
            "energyRatio": 1,
            "toughness": 30
          }
        },
        {
          "primary": {
            "hitRatio": 0.44,
            "energyRatio": 1,
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

    //ELATION
    "Yao Guang": {//done
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
    "Sparxie": {//done
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
            "toughness": 6
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
}