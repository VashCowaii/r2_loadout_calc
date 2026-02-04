const configAbility = {
  "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
  "childAbilityList": [
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}