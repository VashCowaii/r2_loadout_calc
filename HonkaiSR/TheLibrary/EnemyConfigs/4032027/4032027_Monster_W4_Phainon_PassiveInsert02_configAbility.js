const configAbility = {
  "fileName": "4032027_Monster_W4_Phainon_PassiveInsert02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Question",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"497709831\">Enemy_W4_Phainon_LockHp_01</a>"
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"514487450\">Enemy_W4_Phainon_LockHp_02</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Question",
      "value": 1
    },
    "Deleted bullshit",
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": 4032027,
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": 4032027,
          "locationType": "AfterCaster"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}