const configAbility = {
  "fileName": "8032034_Monster_W3_AventurinePart_01_IF_Passive01",
  "childAbilityList": [
    "8032034_Monster_W3_AventurinePart_01_IF_Passive01"
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
      "modifier": "<a class=\"gModGreen\" id=\"-43533344\">Enemy_W3_Aventurine_IF_Double</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"499818287\">Enemy_W3_AventurinePart_01_IF_DeathRattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    }
  ],
  "references": []
}