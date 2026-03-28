const configAbility = {
  "fileName": "3004011_Monster_W3_FigureBoss_New_PassiveAbility_Initiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-942301720\">Monster_W3_FigureBoss_New_SummonMonster</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-972729784\">Enemy_W3_DollElite_Boss_Initiate</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-48704972\">WMonster_W3_DollElite01_PartController</a>"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "DollBoss",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
      "parameters": {
        "P1_BreakDelayRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "P2_ChosenOneSpeedUp": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "P3_ExploreDamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        },
        "P4_ExploreDelayRatio": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        },
        "P5_ExploreDamageUpRatio": {
          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
          "displayLines": "{[Skill01[4]]}",
          "constants": [],
          "variables": [
            "{[Skill01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_Restart",
      "parameters": {
        "P1_BreakDelayRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "P2_ChosenOneSpeedUp": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "P3_ExploreDamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        },
        "P4_ExploreDelayRatio": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        },
        "P5_ExploreDamageUpRatio": {
          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
          "displayLines": "{[Skill01[4]]}",
          "constants": [],
          "variables": [
            "{[Skill01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
      "parameters": {
        "P1_BreakDelayRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "P2_ChosenOneSpeedUp": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "P3_ExploreDamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        },
        "P4_ExploreDelayRatio": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        },
        "P5_ExploreDamageUpRatio": {
          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
          "displayLines": "{[Skill01[4]]}",
          "constants": [],
          "variables": [
            "{[Skill01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
      "parameters": {
        "P1_BreakDelayRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "P2_ChosenOneSpeedUp": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "P3_ExploreDamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        },
        "P4_ExploreDelayRatio": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        },
        "P5_ExploreDamageUpRatio": {
          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
          "displayLines": "{[Skill01[4]]}",
          "constants": [],
          "variables": [
            "{[Skill01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2",
      "parameters": {
        "P1_BreakDelayRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "P2_ChosenOneSpeedUp": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "P3_ExploreDamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        },
        "P4_ExploreDelayRatio": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        },
        "P5_ExploreDamageUpRatio": {
          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
          "displayLines": "{[Skill01[4]]}",
          "constants": [],
          "variables": [
            "{[Skill01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-366928355\">Enemy_W3_DollElite_Boss_ViewModeListener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-894175068\">W3_FigureBoss_BattleScore1</a>"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "DollBoss",
      "state": false
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1183897502\">Monster_W3_FigureBoss_New_ImmuneDebuff</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1183897502\">Monster_W3_FigureBoss_New_ImmuneDebuff</a>",
      "modifierFlags": [
        "ImmuneDebuff",
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-942301720\">Monster_W3_FigureBoss_New_SummonMonster</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}