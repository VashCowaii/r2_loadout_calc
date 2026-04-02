const configAbility = {
  "fileName": "60019_MissionBattleEvent60019_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Horizon's Echo From Afar"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "variableName": "Train_TargetNumber"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.15,
        "Toughness": null,
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[1]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[2]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.15,
        "Toughness": null,
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[1]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[2]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.15,
        "Toughness": null,
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[1]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[2]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.15,
        "Toughness": null,
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[1]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[2]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.15,
        "Toughness": null,
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[1]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
        "displayLines": "({[Skill03[2]]} * 0.15)",
        "constants": [
          0.15
        ],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
          "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}",
            "Train_TargetNumber"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.25,
        "Toughness": null,
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.25) || MUL || RETURN",
        "displayLines": "({[Skill03[1]]} * 0.25)",
        "constants": [
          0.25
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.25) || MUL || RETURN",
        "displayLines": "({[Skill03[2]]} * 0.25)",
        "constants": [
          0.25
        ],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "defender": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
            }
          }
        ]
      },
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}