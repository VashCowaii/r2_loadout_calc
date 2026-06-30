const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Entry",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_Ability11_Entry",
    "SilverWolfL_SilverWolf999_Ability11_Start_Camera",
    "SilverWolfL_SilverWolf999_Ability11_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Part02",
    "SilverWolfL_SilverWolf999_Ability11_End_Camera",
    "SilverWolfL_SilverWolf999_Ability11_End_Part01",
    "SilverWolfL_SilverWolf999_Ability11_End_Part02",
    "SilverWolfL_SilverWolf999_Item_Insert",
    "SilverWolfL_SilverWolf999_ItemStart_Insert_Camera"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    10,
    10,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "Skill11_Shoot_Stance",
      "value": {
        "operator": "Variables[0] (ST Toughness Value) || RETURN",
        "displayLines": "ST Toughness Value",
        "constants": [],
        "variables": [
          "ST Toughness Value"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1816674206\">_M_SilverWolf999_IsAbility11Succession</a>"
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": "<=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_End_Part01",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_Part01",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "stateFilter": "AliveOrLimbo"
  }
}