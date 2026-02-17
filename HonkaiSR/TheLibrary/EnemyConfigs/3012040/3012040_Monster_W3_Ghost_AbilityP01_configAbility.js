const configAbility = {
  "fileName": "3012040_Monster_W3_Ghost_AbilityP01",
  "childAbilityList": [
    "3012040_Monster_W3_Ghost_AbilityP01",
    "3012040_Monster_W3_Ghost_AbilityP01_ForceKill"
  ],
  "skillTrigger": "SkillP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-262946192\">Enemy_W3_Ghost_SelfDestory_Controller</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1834399911\">Enemy_W3_Ghost_ConfineHit_Controller</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"780210766\">Enemy_W3_Ghost_EffectController</a>"
    }
  ],
  "references": []
}