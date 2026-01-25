const configAbility = {
  "fileName": "Garmentmaker_Servant_Aglaea_PassiveAbility01_ForceKill_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ignoreHPLossTriggers": true,
      "ignoreDeathTriggers": true
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "Aglaea_Ability03_Sub"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
    }
  ],
  "references": []
}