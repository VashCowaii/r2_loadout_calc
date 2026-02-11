const configAbility = {
  "fileName": "1005010_Monster_W1_CocoliaP2_Ability08_Part01",
  "childAbilityList": [
    "1005010_Monster_W1_CocoliaP2_Ability08_Camera",
    "1005010_Monster_W1_CocoliaP2_Ability08_Part01",
    "1005010_Monster_W1_CocoliaP2_Ability08_Part02"
  ],
  "skillTrigger": "Skill08",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_CocoliaP2_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseCharge"
    }
  ],
  "references": []
}