const configAbility = {
  "fileName": "4012092_Monster_W4_DawnsEyePart_03_Ability01_Part01",
  "childAbilityList": [
    "4012092_Monster_W4_DawnsEyePart_03_Ability01_Part01",
    "4012092_Monster_W4_DawnsEyePart_03_Ability01_Part02",
    "4012092_Monster_W4_DawnsEyePart_03_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W4_DawnsEyePart_03_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}