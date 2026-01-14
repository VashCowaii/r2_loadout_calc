const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
  "childAbilityList": [
    "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Entry_Camera",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Camera"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Memosprite",
  "energy": 30,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": "Single Target (Primary)",
        "target2": "Caster",
        "invertCondition": true
      }
    },
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Servant_PlayerBoyServant_30_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": "Single Target (Primary)",
        "target2": "Caster"
      }
    }
  ],
  "references": []
}