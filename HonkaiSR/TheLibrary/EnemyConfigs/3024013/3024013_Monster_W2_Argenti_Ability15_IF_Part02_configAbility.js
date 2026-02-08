const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability15_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1502513574\">Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1084859487\">Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-518883080\">Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1407152047\">Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Player Team"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1502513574\">Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1502513574\">Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Player Team",
        "location": "Pos2"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1084859487\">Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1084859487\">Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Player Team",
        "location": "Pos3"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-518883080\">Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-518883080\">Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Player Team",
        "location": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1407152047\">Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1407152047\">Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1783897766\">Monster_W2_Argenti_IF_Summon01</a>"
            }
          }
        ]
      },
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1783897766\">Monster_W2_Argenti_IF_Summon01</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1767120147\">Monster_W2_Argenti_IF_Summon02</a>"
            }
          }
        ]
      },
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1767120147\">Monster_W2_Argenti_IF_Summon02</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1750342528\">Monster_W2_Argenti_IF_Summon03</a>"
            }
          }
        ]
      },
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1750342528\">Monster_W2_Argenti_IF_Summon03</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
      "isTrigger": true
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1783897766\">Monster_W2_Argenti_IF_Summon01</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1867785861\">Monster_W2_Argenti_IF_Summon04</a>"
            }
          }
        ]
      },
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1867785861\">Monster_W2_Argenti_IF_Summon04</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
      "isTrigger": true
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1767120147\">Monster_W2_Argenti_IF_Summon02</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
      "isTrigger": true
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1750342528\">Monster_W2_Argenti_IF_Summon03</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
      "isTrigger": true
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1867785861\">Monster_W2_Argenti_IF_Summon04</a>"
            }
          }
        ]
      },
      "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
      "isTrigger": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"561789538\">Monster_W2_Argenti_Ability15_IF_MarkModifier</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1407152047\">Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-518883080\">Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1084859487\">Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1502513574\">Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__561789538\">Monster_W2_Argenti_Ability15_IF_MarkModifier</a>"
    }
  ]
}