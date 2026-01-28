const configAbility = {
  "fileName": "Evernight_Evernight_Ability21_Part01",
  "childAbilityList": [
    "Evernight_Evernight_Ability21_Part01",
    "Evernight_Evernight_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_Perf2"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Evernight_Ability02_2_Servant",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Evernight_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect",
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Evernight_Ability02_Servant",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Evernight_Ability21_Part02",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_STB2"
    }
  ],
  "references": []
}