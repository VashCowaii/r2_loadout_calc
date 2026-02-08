const configAbility = {
  "fileName": "8002052_Monster_XP_Minion04_06_Passive01",
  "skillTrigger": "PassiveSkill",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"605655574\">Enemy_XP_Minion04_01_EscapingCharge01</a>"
    }
  ],
  "references": []
}