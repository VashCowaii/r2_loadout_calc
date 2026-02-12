const compositeAbilityObject = {
  "fullCharacterName": 4012042,
  "trimCharacterName": 4012042,
  "abilityList": [
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part02",
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part01",
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part02",
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part01",
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_PassiveSkillInitiate"
  ],
  "abilityObject": {
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part02": {
      "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_EntityScore",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part01": {
      "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part01",
      "childAbilityList": [
        "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part01",
        "4012042_Monster_AML_Minion03_01_LocalLegend_Ability02_Part02",
        "4012042_Monster_AML_Minion03_01_Ability03_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Minion03_01_LocalLegend_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part02": {
      "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Praise Nikador"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "variableName": "_EntityScore",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        }
      ],
      "references": []
    },
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part01": {
      "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part01",
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_AML_Minion03_01_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_PassiveSkillInitiate": {
      "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_PassiveSkillInitiate",
      "childAbilityList": [
        "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_PassiveSkillInitiate",
        "4012042_Monster_AML_Minion03_01_Ability01_Camera",
        "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part01",
        "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-69325530\">Monster_AML_Minion03_01_LocalLegend_ListenPhase2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-69325530\">Monster_AML_Minion03_01_LocalLegend_ListenPhase2</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_AML_Minion03_01_LocalLegend_Ability01_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}