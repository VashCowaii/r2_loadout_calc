const configAbility = {
  "fileName": "3003030_Monster_W3_Figure_02_Ability04_Part02",
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
      "scope": "TargetEntity",
      "variableName": "MarkCount"
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
          "scope": "TargetEntity",
          "variableName": "Monster_W3_Figure_02_AimTargetCount",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
      "addStacksPerTrigger": 4
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W3_Figure_02_BattleScore1_Flag1",
      "value": 1
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}