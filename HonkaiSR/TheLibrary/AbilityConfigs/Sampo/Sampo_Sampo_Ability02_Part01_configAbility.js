const configAbility = {
  "fileName": "Sampo_Sampo_Ability02_Part01",
  "childAbilityList": [
    "Sampo_Sampo_Ability02_Camera",
    "Sampo_Sampo_Ability02_Part01",
    "Sampo_Sampo_Ability02_Part02",
    "Sampo_FireBullet_Ability",
    "Sampo_Sampo_Ability02_End_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 6,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sampo_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}