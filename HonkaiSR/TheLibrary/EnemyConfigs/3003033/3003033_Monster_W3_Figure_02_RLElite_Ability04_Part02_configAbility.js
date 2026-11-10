const configAbility = {
  "fileName": "3003033_Monster_W3_Figure_02_RLElite_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MarkCount",
      "scope": "TargetEntity"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W3_Figure_02_AimTargetCount",
          "resetValue": 1,
          "scope": "TargetEntity"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>",
      "valuePerStack": {
        "#Ability04_P1_DamageUPLayer": {
          "displayLines": "{[Skill04[0]]}"
        },
        "#Ability04_P2_DamageUPRatio": {
          "displayLines": "{[Skill04[1]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
      "addStacksPerTrigger": 4
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "W3_Figure_02_BattleScore1_Flag1"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}