const configAbility = {
  "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability03_Part01",
  "childAbilityList": [
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W1_SvarogPart_RL_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    }
  ],
  "references": []
}