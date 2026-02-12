const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
      "variables": {
        "_ErosionParam": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4035011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Anti-Creator, Hatred Inundate"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
            "invertCondition": true
          },
          {
            "name": "Compare: Variable",
            "value1": "_IsTriggerTutorialHate",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_IsTriggerTutorialHate",
          "value": 1
        },
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 0.3,
          "adjustmentType": "Delay"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4035010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Anti-Creator, Hatred Inundate"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
          },
          {
            "name": "Compare: Variable",
            "value1": "_IsTriggerTutorialHate",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_IsTriggerTutorialHate",
          "value": 1
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{BattleEvent60030}}"
          },
          "value": 4,
          "isFixed": "* ERR",
          "isSetToValue": true
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}