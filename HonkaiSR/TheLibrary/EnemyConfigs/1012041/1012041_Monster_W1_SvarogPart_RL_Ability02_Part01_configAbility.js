const configAbility = {
  "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability02_Part01",
  "childAbilityList": [
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "OneMore"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_SvarogPart_RL_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}