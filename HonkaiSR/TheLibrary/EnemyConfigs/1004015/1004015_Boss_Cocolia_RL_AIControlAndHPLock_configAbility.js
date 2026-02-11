const configAbility = {
  "fileName": "1004015_Boss_Cocolia_RL_AIControlAndHPLock",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}