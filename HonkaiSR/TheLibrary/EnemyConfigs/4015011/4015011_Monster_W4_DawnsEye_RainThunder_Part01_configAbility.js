const configAbility = {
  "fileName": "4015011_Monster_W4_DawnsEye_RainThunder_Part01",
  "childAbilityList": [
    "4015011_Monster_W4_DawnsEye_RainThunder_Part01",
    "4015011_Monster_W4_DawnsEye_RainThunder_Part02"
  ],
  "skillTrigger": "RainThunder",
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
      "ability": "Monster_W4_DawnsEye_RainThunder_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}