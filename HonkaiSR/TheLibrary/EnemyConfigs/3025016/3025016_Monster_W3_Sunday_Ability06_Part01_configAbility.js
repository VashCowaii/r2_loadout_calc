const configAbility = {
  "fileName": "3025016_Monster_W3_Sunday_Ability06_Part01",
  "childAbilityList": [
    "3025016_Monster_W3_Sunday_Ability06_Part01",
    "3025016_Monster_W3_Sunday_Ability06_Part02",
    "3025016_Monster_W3_Sunday_Ability06_Camera",
    "3025016_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part01to02"
  ],
  "skillTrigger": "Skill06",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill06PerformFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill06PerformFlag",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 4,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2090970120\">Enemy_W3_Sunday_Player20LockHP</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-660746350\">Enemy_W3_Sunday_LightTeamLockHP</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Sunday_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}