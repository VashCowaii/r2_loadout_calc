const configAbility = {
  "fileName": "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part01",
  "childAbilityList": [
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Camera",
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part01",
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part02"
  ],
  "skillTrigger": "Skill02P2",
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
      "ability": "Monster_W4_DawnsEyePart_Ability02P2_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target"
  },
  "references": []
}