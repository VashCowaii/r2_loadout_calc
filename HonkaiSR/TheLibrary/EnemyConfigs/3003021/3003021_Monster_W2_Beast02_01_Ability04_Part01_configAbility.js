const configAbility = {
  "fileName": "3003021_Monster_W2_Beast02_01_Ability04_Part01",
  "abilityType": null,
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
      "ability": "Monster_W2_Beast02_01_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}