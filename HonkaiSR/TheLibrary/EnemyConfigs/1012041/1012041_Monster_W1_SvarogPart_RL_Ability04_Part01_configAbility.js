const configAbility = {
  "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability04_Part01",
  "childAbilityList": [
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Camera"
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
      "ability": "Monster_W1_SvarogPart_RL_Ability04_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}