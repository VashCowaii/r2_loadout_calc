const configAbility = {
  "fileName": "8012200_Monster_W2_HuanlongPart_Ability01_Part01",
  "childAbilityList": [
    "8012200_Monster_W2_HuanlongPart_Ability01_Camera",
    "8012200_Monster_W2_HuanlongPart_Ability01_Part01",
    "8012200_Monster_W2_HuanlongPart_Ability01_Part02"
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
      "ability": "Monster_W2_HuanlongPart_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}