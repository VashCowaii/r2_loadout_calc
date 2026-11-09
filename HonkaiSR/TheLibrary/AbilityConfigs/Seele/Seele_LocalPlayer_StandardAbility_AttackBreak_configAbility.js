const configAbility = {
  "fileName": "Seele_LocalPlayer_StandardAbility_AttackBreak",
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
        "DamageType": "Physical"
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
        "DamageType": "Fire"
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
        "DamageType": "Ice"
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
        "DamageType": "Thunder"
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
        "DamageType": "Wind"
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
        "DamageType": "Quantum"
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
        "DamageType": "Imaginary"
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