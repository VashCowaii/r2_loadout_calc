const configAbility = {
  "fileName": "20034_BattleEvent_W4_Claymore_01_LocalLegend_Part01",
  "childAbilityList": [
    "20034_BattleEvent_W4_Claymore_01_LocalLegend_EnterReady",
    "20034_BattleEvent_W4_Claymore_01_LocalLegend_Part01"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_SelectTimes",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Dark Praetor: Self}}"
            },
            "value1": "_EnterBattle",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillType": "ControlSkill03",
              "target": {
                "name": "Add Target by Unique Identifier",
                "identifier": "SelectTarget"
              },
              "afterInjection": []
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelectTimes",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Self}}"
          },
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01",
          "isTrigger": true
        }
      ]
    },
    "Wait for Pending Ability Completions",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Player-Team Target",
    "filter": {
      "name": "Target Name",
      "target": "{{Player Team(Exclude Memosprites)}} - {{EVENT[RoT] Dark Praetor: Selected Target}}"
    }
  }
}