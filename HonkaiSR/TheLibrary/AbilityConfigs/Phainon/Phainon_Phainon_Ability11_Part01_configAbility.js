const configAbility = {
  "fileName": "Phainon_Phainon_Ability11_Part01",
  "childAbilityList": [
    "Phainon_Phainon_Ability11_EnterReady",
    "Phainon_Phainon_Ability11_Part01",
    "Phainon_Phainon_Ability11_Part02",
    "Phainon_Phainon_Ability11_Camera"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    30,
    0,
    20
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Auto-Battle"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Entity a Part/Body Extension",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Phainon_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Is Entity a Part/Body Extension",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      }
    }
  ],
  "references": []
}