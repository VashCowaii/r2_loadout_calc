const configAbility = {
  "fileName": "Feixiao_LocalPlayer_StandardAbility_AttackBreak",
  "skillTrigger": "MazeCommonPassve01",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Physical"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Fire"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Ice"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Thunder"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Wind"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Quantum"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Element",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": "Imaginary"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}