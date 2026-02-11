const configAbility = {
  "fileName": "8032033_Monster_W3_AventurinePart_IF_Passive01",
  "childAbilityList": [
    "8032033_Monster_W3_AventurinePart_IF_Passive01"
  ],
  "skillTrigger": "PassiveSkill01",
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
      "modifier": "<a class=\"gModGreen\" id=\"718847384\">Monster_W3_AventurinePart_IF_SpeedZero</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1089097326\">Enemy_W3_AventurinePart_IF_DeathRattle</a>"
    }
  ],
  "references": []
}